exports.up = function(knex, Promise) {
  return knex.schema.createTable('individuals', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('characteristics');
    table.string('catch_phrase')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('individuals')
};
