require("dotenv").config()
const PORT=process.env.PORT
const express=require("express")
const connect=require("./config/db")
const userRoute=require("./src/user/user.router")
const jobRoute=require("./src/jobs/jobs.router")
const cors=require("cors")

const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(cors())




app.use("/users",userRoute)
app.use("/jobs",jobRoute)
app.listen(PORT,async()=>{
    await connect()
    console.log("server is running")
})
