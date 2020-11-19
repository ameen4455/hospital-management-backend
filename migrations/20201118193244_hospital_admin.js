exports.up = function(knex) {
    return knex.schema.createTable('hospitaladmin', (table) => {
        table.increments();
        table.integer('h_id').unsigned().notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.foreign('h_id').references('hospital.id');
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('hospitaladmin');
};

