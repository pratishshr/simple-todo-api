/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import Todo from '../models/Todo';

export function fetchAll() {
  return Todo.fetchAll();
}

export function fetchById(id) {
  return Todo.forge({id: id}).fetch();
}