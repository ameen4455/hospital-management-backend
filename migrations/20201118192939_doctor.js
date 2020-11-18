
exports.up = function(knex) {
    return knex.schema.createTable('doctor', (table) => {
        table.increments('d_id');
        table.string('name').notNullable();
        table.string('specialization').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.integer('payment_per_session').notNullable();
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('hospital');
};

