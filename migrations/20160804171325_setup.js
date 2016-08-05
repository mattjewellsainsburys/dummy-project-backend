
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.string('name');
      table.integer('visits');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};


// postgres://a1f0215afc098:c320ca593627@aa837woegbzzhp.crd1g8rgwz9g.eu-west-1.rds.amazonaws.com:5432/ebdb
