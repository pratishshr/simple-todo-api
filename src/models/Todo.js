/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import db from '../utils/db';

const Todo = db.Model.extend({
  tableName: 'todos'
});

export default Todo;
