var moment = require('moment');
const TABLE_NAME = 'todos';

exports.up = function (knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, function (table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description');
      table.timestamp('created_at').notNullable().defaultTo(moment().format());
      table.timestamp('updated_at').notNullable().defaultTo(moment().format());
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable(TABLE_NAME);
};
