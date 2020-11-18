exports.up = function(knex) {
    return knex.schema.createTable('doctor', (table) => {
        table.increments('ha_id');
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.string('username').notNullable();
        table.string('h_id')
        .references('h_id')
        .inTable('hospital');
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('hospital_admin');
};

