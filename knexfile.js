// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/projects.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './data/seeds'
    }
  }
};
