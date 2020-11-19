exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('gender').notNullable();
        table.unique('username');
        table.string('password').notNullable();
        table.integer('age').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};