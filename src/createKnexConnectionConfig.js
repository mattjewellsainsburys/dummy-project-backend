module.exports = function () {
  console.log(Object.keys(process.env).filter(function (key) {
    return /$RDS/.test(key);
  }));
  if (process.env.RDS_DB_NAME) {
    console.log('attempting to connect to amazon rds');
    return {
      client: 'pg',
      connection: {
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME
      }
    };
  }
  console.log('no rds vars found, attempting to connect to sqlite');
  return {
    client: 'sqlite3',
    connection: {
      filename: './storage/dev.sqlite3'
    }
  };
};
