
exports.up = function(knex) {
    return knex.schema.createTable('hospital', (table) => {
        table.increments('h_id');
        table.string('name').notNullable();
        table.string('h_addr').notNullable();
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('hospital');
};
