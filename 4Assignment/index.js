var express = require('express');
var app = express();
src="https://cdn.jsdelivr.net/npm/superagent"

//app.use(express.static(__dirname + 'index.html'));
//app.get('/', function(req, res){
 //   res.sendFile(path.join(__dirname, '/index.html'));
 //});

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass',
  database: 'contacts'
});

 
 app.use(express.static('public'));
 app.get('', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

app.listen('3000');
console.log('working on 3000');
 // test with curl 'http://localhost:3000/add?firstName=peter'
 
 app.get('/add', function(req, res){
    console.log('firstName: ', req.query.firstName);
    //res.send(`echoing: ${req.query.firstName}`);
   
    console.log('lastname: ', req.query.lastname);
    //res.send(`echoing: ${req.query.lastname}`);

    console.log('email: ', req.query.email);
   // res.send(`echoing: ${req.query.email}`);
   
    console.log('phone: ', req.query.phone);
    //res.send(`echoing: ${req.query.phone}`);
   
    console.log('university: ', req.query.university);
    //res.send(`echoing: ${req.query.university}`);
    
    console.log('major: ', req.query.major);
    //res.send(`echoing: ${req.query.major}`);
   
    connection.query(
      'INSERT INTO `contacts` (`firstName`,`lastname`,`email`,`phone`,`university`,`major`) VALUES(?,?,?,?,?,?)', [req.query.firstName,req.query.lastname,req.query.email,req.query.phone,req.query.university,req.query.major],
      function(err, results, fields) {
        console.log(results);
        res.send(results);
      }
    );
 });

 app.get('/read', function(req, res){

   connection.query(
     'SELECT * FROM `contacts`',
     function(err, results, fields) {
       console.log(results);
       res.send(results);
     }
   );

});


//function addContact(){
 //   var firstName = document.getElementById('firstName').value;
 //   console.log(firstName);
//}


 

 

