
exports.up = function(knex) {
    return knex.schema.createTable('works', (table) => {
        table.string('d_id')
        .references('d_id')
        .inTable('doctor');
        table.string('h_id')
        .references('h_id')
        .inTable('hospital');
        table.integer('days').notNullable();
        table.string('time').notNullable();
    });        
};

exports.down = function(knex) {
    return knex.schema.dropTable('works');
};

