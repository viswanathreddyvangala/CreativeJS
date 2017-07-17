var sql = require('mysql');
var readline = require('readline')
var con = sql.createConnection({
	host:"localhost",
	user:"root",
	password:'',
	database:"test"
});

con.connect(function(err){
	if(err)
	console.log("err connnecting to database")
    })
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter details of person name  ', (username) => {
  // TODO: Log the answer in a database
   
rl.question('Enter details of id name  ', (usrid) => {
    var data = {name:username , id:usrid};
    con.query('INSERT INTO details SET ?',data,function(err,res){
    	if(err)
    	{
    		console.log("ERROR"+err)
    	}
    	else
    		console.log("successfully INSERT")
    })  

  rl.close();
});
});