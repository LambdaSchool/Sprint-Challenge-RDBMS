module.exports = {
    development: {
        client: 'sqlite3',
            connection: {
            filename: './data.sqlite3'
        },
        useNullAsDefault: true ,
        migrations: {
            directory: './migrations'
            },
    },
};