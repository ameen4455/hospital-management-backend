import { Request, Response } from "express";
import { Works } from "../models/works";
import moment from "moment";
import { Appointments } from "../models/appointment";

// TODO Get All appointments from user id

const checkIfDoctorAvailableOnDate = async (
  date: string,
  h_id: number,
  d_id: number
) => {
  let dateValue = new Date(date);
  let day = dateValue.toLocaleDateString("en", {
    weekday: "long",
  });

  let dayValue = await Works.query()
    .select(day, "session_duration")
    .where("h_id", h_id)
    .where("d_id", d_id);

  if (!dayValue || !dayValue[0]) {
    return { schedule: null, timePerSession: null };
  }

  let schedule: any = dayValue[0];

  if (!schedule[day] || schedule[day] === null) {
    return { schedule: null, timePerSession: null };
  }

  return { schedule: schedule[day], timePerSession: schedule.session_duration };
};

const checkIfBookingIsAvailable = async (
  date: string,
  h_id: number,
  d_id: number,
  schedule: string,
  timePerSession: number
) => {
  const [startTime, endTime] = schedule
    .split("-")
    .map((x) => moment(x, "HH:mm"));

  let duration = moment.duration(endTime.diff(startTime));
  let minutes = duration.asMinutes();

  const appointments = await Appointments.query()
    .select("id")
    .where("h_id", h_id)
    .where("d_id", d_id)
    .where("date", date);

  let numberOfAppointments = appointments.length;

  if ((numberOfAppointments + 1) * timePerSession > minutes) {
    return { time: null };
  }

  return {
    time: moment(startTime)
      .add(numberOfAppointments * timePerSession, "minutes")
      .format("HH:mm"),
  };
};

export const addAppointment = async function (req: Request, res: Response) {
  try {
    const { date, h_id, d_id, u_id } = req.body;

    const { schedule, timePerSession } = await checkIfDoctorAvailableOnDate(
      date,
      h_id,
      d_id
    );

    if (!schedule) {
      res.status(400).send({ message: "Doctor not available in given day" });
      return;
    }

    const { time } = await checkIfBookingIsAvailable(
      date,
      h_id,
      d_id,
      schedule,
      timePerSession
    );

    if (!time || time === null) {
      res.status(400).send({ message: "Booking full" });
      return;
    }

    let appoRes = await Appointments.query().insertAndFetch({
      h_id,
      d_id,
      u_id,
      date,
      time,
    });

    res.send({ appoRes });
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
};
