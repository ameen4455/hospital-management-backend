
exports.up = function(knex) {
    return knex.schema.createTable('appointment', (table) => {
        table.increments();
        table.integer('h_id').unsigned().notNullable();
        table.integer('d_id').unsigned().notNullable();
        table.integer('u_id').unsigned().notNullable();
        table.string('time').notNullable();
        table.string('date').notNullable();
        table.foreign('d_id').references('doctor.id');
        table.foreign('h_id').references('hospital.id');
        table.foreign('u_id').references('users.id');
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('appointment');
};

