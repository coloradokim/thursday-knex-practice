exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('individuals').del()
    .then(function() {
      // Inserts seed entries
      return knex('individuals').insert([{
          id: 1,
          name: 'Kim Schlesinger',
          characteristics: 'I--J',
          catch_phrase: 'Are you ready to rumble?'
        },
        {
          id: 2,
          name: 'Thomas Fowler',
          characteristics: 'Quiet, curious',
          catch_phrase: 'I am flying to Dallas next week'
        },
        {
          id: 3,
          name: 'Jeff Dean',
          characteristics: 'full of fire, loves working',
          catch_phrase: 'fuuuuuuuuuuuck'
        }
      ]);
    });
};
