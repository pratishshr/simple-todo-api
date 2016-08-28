/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import Todo from '../models/Todo';
import moment from 'moment';

export function fetchAll() {
  return Todo.forge().orderBy('is_complete', 'ASC').fetchAll();
}

export function fetchById(id) {
  return Todo.forge({id: id}).fetch();
}

export function create(todo) {
  return Todo.forge({
      title: todo.title,
      description: todo.description,
      is_complete: todo.isComplete || false,
      created_at: moment().format()
    })
    .save();
}

export function update(todoId, todo) {
  return Todo.forge({
      id: todoId
    })
    .save({
      title: todo.title,
      description: todo.description,
      is_complete: todo.isComplete || false,
      updated_at: moment().format()
    });
}

export function destroy(todoId) {
  return Todo.forge({
    id: todoId
  }).destroy({require: true});
}