// Update with your config settings.
var config = require('./config/config.json');

module.exports = {
  development: {
    client: config.db.client,
    connection: config.db.connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
