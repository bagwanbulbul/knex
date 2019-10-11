var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'navgurukul',
    database : 'myDB'
});
// get data
conn.connect();
app.get('/get', function(request, response){
    conn.query('select * from ng', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
});
// poating data
app.post("/post/myDB",function(req,response){
    id=req.body.id
    name=req.body.name
    lastname=req.body.lastname
    data=[id,name,lastname]
    var sql = "INSERT INTO ng(id,name,lastname) VALUES (?,?,?)";
    conn.query(sql,data, function(err, result){
    if (err){
            res.send(400).send("1 record inserted");
        }else{
            response.send("data inserted")
        }
    })
});
// update data
app.put("/update/:userID",function(req,res){
    userID=req.params.userID
    name=req.body.name
    // lastname=req.body.lastname
    data=[name]
    var sql = 'UPDATE ng SET name = ? WHERE id =' +userID;
    conn.query(sql,data,function(err,result){
        if (err){
            res.send(400).send("ops!!!! something went wrong")
        }else{
            res.send("update column")
        }
    })
});
// delete data
app.delete("/delete/:userID",function(req,res){
    userID = req.params.userID
    conn.query('DELETE FROM `ng` WHERE `id`=?',userID,function(error) {
        if (error) throw error;
        res.end('Record has been deleted!');
      });
})
app.listen(2000, function () {
    console.log('Express server is listening on port 3000');
});