const mysql = require("mysql")

const express = require("express")
const db = require("../dbConnect/dbConnect")
const router = express.Router()
const utils = require("../utils/utils")


router.post("/storeuserinfo", (req,res) =>{
  const { name, email, password} = req.body
  const pass= req.body.password;

  
  const query = 'insert into userinfo (name,email,password) values (?,?,?)'
  db.query(query,[name,email,pass],
    (error, result) => {
      res.send(utils.createObject(error, result))
    }
    )
  
})


module.exports = router;