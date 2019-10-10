const mysql = require('mysql')
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'navgurukul',
  database:'myDB'
})
module.exports = connection;
connection.connect(function(err){
  if (err){
    console.error("error connection"+err.stack)
    return;
  }
  console.log('connected as id ' + connection.threadId)
})
// Actions
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'navgurukul';
