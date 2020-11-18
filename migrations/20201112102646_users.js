exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.unique('email');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};