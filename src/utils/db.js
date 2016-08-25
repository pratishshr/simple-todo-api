/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../config/config.json';

const connection = knex(config.db);
const db = bookshelf(connection);

export default db;
