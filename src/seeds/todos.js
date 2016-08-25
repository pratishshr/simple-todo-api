const TABLE_NAME = 'todos';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex(TABLE_NAME).insert({title: 'Make a simple API', description: 'An api with node and express'}),
        knex(TABLE_NAME).insert({title: 'Make a CRUD application with React', description: 'CRUD app using the simple todo api as the back end'}),
        knex(TABLE_NAME).insert({title: 'Make new lesson for react native', description: 'Lessons for weekly react native sessions'}),
        knex(TABLE_NAME).insert({title: 'Deploy the api to Heroku', description: 'The simple todo API that was made for any todo applications'}),
        knex(TABLE_NAME).insert({title: 'Learn how to deploy to heroku first ', description: 'What is heroku? :D'})
      ]);
    });
};
