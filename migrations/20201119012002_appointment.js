
exports.up = function(knex) {
    return knex.schema.createTable('appointment', (table) => {
        table.increments('a_id');
        table.string('data_time').notNullable();
        table.string('h_id')
        .references('h_id')
        .inTable('hospital');
        table.string('d_id')
        .references('d_id')
        .inTable('doctor');
        table.string('u_id')
        .references('u_id')
        .inTable('user');
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('appointment');
};

