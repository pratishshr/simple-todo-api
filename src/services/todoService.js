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
    errorCode: 400,
    message: `Supplied value(s) for ${validationErrors.toString()} is not an integer`
  });
}

export function create(todo) {
  let validationErrors = validator.checkForEmpty({title: todo.title});
  if(!validationErrors.length) {
    return todoDao.create(todo);
  }
  throw new ValidationError({

  })
}
