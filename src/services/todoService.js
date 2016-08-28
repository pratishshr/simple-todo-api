/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/20/16.
 */

// Daos
import * as todoDao from '../daos/todoDao';

// Utils
import * as validator from '../utils/validator';

// Custom Errors
import ValidationError from '../errors/ValidationError';

export function fetchAll() {
  return todoDao.fetchAll();
}

export function fetchById(id) {
  let validationErrors = validator.checkForInt({id});
  if (!validationErrors.length) {
    return todoDao.fetchById(id);
  }
  throw new ValidationError({
    statusCode: 400,
    message: `Supplied value(s) for ${validationErrors.toString()} is not an integer`
  });
}

export function create(todo) {
  return todoDao.create(todo);
}

export function update(todoId, todo) {
  let validationErrors = validator.checkForInt({id: todoId});
  if (!validationErrors.length) {
    return todoDao.update(todoId, todo);
  }
  throw new ValidationError({
    statusCode: 400,
    message: `${validationErrors.toString()} should be an integer`
  })
}

export function destroy(todoId) {
  let validationErrors = validator.checkForInt({id: todoId});
  if (!validationErrors.length) {
    return todoDao.destroy(todoId);
  }
  throw new ValidationError({
    statusCode: 400,
    message: `${validationErrors.toString()} should be an integer`
  })
}