exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('u_id');
        table.string('name').notNullable();
        table.string('gender').notNullable();
        table.unique('username').notNullable();
        table.string('password').notNullable();
        table.integer('age').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};