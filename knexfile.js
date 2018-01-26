// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
      },
  migrations: {
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true
},
  production: {
    client: 'mysql',
    connection: {
      host:'localhost',
      database: 'Lambda',
      user:     'Jax',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
