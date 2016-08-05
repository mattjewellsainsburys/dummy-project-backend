module.exports = function () {
  console.log(Object.keys(process.env).filter(function (key) {
    return /$RDS/.test(key);
  }));
  if (process.env.RDS_CONNECTION_STRING) {
    console.log('attempting to connect to amazon rds');
    return {
      client: 'pg',
      connection: process.env.RDS_CONNECTION_STRING
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
