const mysql = require("mysql")

const connection = mysql.createConnection({
    host : 'url',
    user : 'username',
    password : 'pass',
    database : 'db_name',
    port: 3306
})

connection.connect((err)=>{

    if(!err)
    {
        console.log("connection with DB established successfully");
    }


})

module.exports= connection;
