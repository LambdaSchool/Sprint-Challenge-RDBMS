
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
    tbl.increments();
    tbl
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects');
    tbl.string('description', 400).notNullable();
    tbl.string('notes', 400);
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
