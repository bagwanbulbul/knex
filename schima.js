var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'myDB'
    },
  })
const ng = [
    { name: 'bulbul', lastname: "bagwan", },
    { name: 'anjali', lastname: "sen" },
    { name: 'anjali', lastname: "patil" },
    { name: 'shivani', lastname: "chohan" },
    { name: 'priya', lastname: "mishra" },
    { name: 'sonam', lastname: "goud" },
    { name: 'sapna', lastname: "vishnoi" },
    { name: 'pragti',lastname: "rahul" },
]
    
knex('ng').insert(ng).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });


