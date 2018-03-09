exports.up = function(knex, Promise) {
  return knex.schema.createTable('Project_Contexts', tbl => {
    tbl.increments();

    tbl
        .integer('projectId').unsigned().references('id').inTable('Projects');
    tbl
        .integer('contextId').unsigned().references('id').inTable('Contexts');
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Project_Contexts');
};
