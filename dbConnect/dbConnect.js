const mysql = require("mysql")

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'manager',
    database : 'userdb_smart',
    port: 3306
})

connection.connect((err)=>{

    if(!err)
    {
        console.log("connection with DB established successfully");
    }


})

module.exports= connection;
