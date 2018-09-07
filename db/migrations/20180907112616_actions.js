
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
    
        tbl 
            .string('action_name', 128)
            .notNullable()
            .unique('unique_action');    
        
        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('actions');
};
