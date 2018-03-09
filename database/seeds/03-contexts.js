
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context: 'at home'},
        {id: 2, context: 'office'},
        {id: 3, context: 'at computer'}
      ]);
    });
};
