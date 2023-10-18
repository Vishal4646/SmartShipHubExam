const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const morgan = require("morgan")
const app = express()

const router = require("./Router/route")

app.use(morgan('combined'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors("*"))
app.use(express.json())

app.use("/router", router)

app.listen(4000,"0.0.0.0", ()=>{
    console.log("Backend server running on port 4000")
})