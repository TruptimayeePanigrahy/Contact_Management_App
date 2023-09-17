const express = require("express")
const app = express()
const { connection } = require("./Controller/db")
const { route } = require("./Routes/contactroute")
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use("/", route)


app.get("/", (req, res) => {
    res.send("Home page")
})


app.listen(process.env.port,async () => {
    try {
        await connection
        console.log("server is running...")
    } catch (error) {
        console.log(error)
    }
    console.log("db is connected")
})





















