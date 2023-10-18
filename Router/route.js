const mysql = require("mysql")

const express = require("express")
const db = require("../dbConnect/dbConnect")
const router = express.Router()
const utils = require("../utils/utils")


  //get All Orders from Orders Table by Customer id
  router.get("/getOrders/:id", (req,resp) => {
    const query = `SELECT  * FROM orders where customer_id =?`
    const id = req.params.id
    db.query(query , [id], (err,data) => {
      resp.send(utils.createObject(err,data))
    })
  })
 
  // //get All order Details of coustomers countrywise in ASC 
  // router.get("/getOrderDetails", (req,resp) => {
  //   const query = 'SELECT c.country,c.name,COUNT(o.Id) AS TotalOrders, SUM(o.amount) AS TotalAmount FROM customers c LEFT JOIN orders o ON c.Id = o.customer_id GROUP BY c.country, c.name ORDER BY c.country ASC, c.name ASC'
  //   db.query(query , (err,data) => {
  //     resp.send(utils.createObject(err,data))
  //   })
  // })



module.exports = router;