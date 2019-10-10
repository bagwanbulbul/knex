var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'myDB'
    },
    pool: { min: 0, max: 7 }
  })
knex.schema.createTable('ng_data', (table) => {
    table.increments('id')
    table.string('name')
    table.string("lastname")

})
.then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
