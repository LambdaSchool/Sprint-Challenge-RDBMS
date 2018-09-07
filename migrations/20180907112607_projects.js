
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', function(tbl) {
        tbl.increments();
    
        tbl 
            .string('name', 128)
            .notNullable()
            .unique('name');    
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('project');
};
