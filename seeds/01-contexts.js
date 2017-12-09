
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {context: 'home'},
        {context: 'office'},
        {context: 'hobby'},
        {context: 'engineer'},
        {context: 'art'},
        {context: 'online'}
      ]);
    });
};
