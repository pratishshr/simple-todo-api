'use strict';

var moment = require('moment');
var TODO_TABLE = 'todos';

exports.up = function (knex, Promise) {
  return knex.schema.createTable(TODO_TABLE, function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description');
    table.boolean('is_complete').defaultTo(false);
    table.timestamp('created_at').notNullable().defaultTo(moment().format());
    table.timestamp('updated_at').notNullable().defaultTo(moment().format());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable(TODO_TABLE);
};