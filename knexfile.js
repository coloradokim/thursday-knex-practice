module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/coolpeople_test',
  },

  development: {
    client: 'pg',
    connection: 'postgres://localhost/coolpeople'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
  }
};
