exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.text('description').notNullable()
    table.text('notes')
    table.boolean('completed')
    table
      .integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}
