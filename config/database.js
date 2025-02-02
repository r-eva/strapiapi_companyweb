module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_database'),
        username: env('DATABASE_USERNAME', 'reginaeva'),
        password: env('DATABASE_PASSWORD', 'abc123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
