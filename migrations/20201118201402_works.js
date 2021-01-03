
exports.up = function(knex) {
    return knex.schema.createTable('works', (table) => {
        table.integer('h_id').unsigned().notNullable();
        table.integer('d_id').unsigned().notNullable();
        table.foreign('d_id').references('doctor.id');
        table.foreign('h_id').references('hospital.id');
        table.string('monday');
        table.string('tuesay');
        table.string('wednessday');
        table.string('thursday');
        table.string('friday');
        table.string('saturday');
        table.integer('session_duration');
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('works');
};

