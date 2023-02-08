const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const router = require("./userRoutes")
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/v1",router)
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})
// app.get("/api/v1/userdata", (req, res) => {
//     res.json([
//         {
//             name:"Umair",
//             email:'umair@gmail.com',
//             password:'123456'
//         },
//         {
//             name:"Rehan",
//             email:'rehan@gmail.com',
//             password:'123456'
//         },
//         {
//             name:"Zain",
//             email:'zain@gmail.com',
//             password:'123456'
//         },
//         {
//             name:"Ahmed",
//             email:'ahmed@gmail.com',
//             password:'123456'
//         },
//     ])
// })
// app.post("/api/v1/register",(req,res)=>{
//     const name = req.body.name
//     const email = req.body.email
//     const password = req.body.password

//     res.json({
//         success:true,
//     })
// })
app.listen(port, () => {
    console.log(`Service is Working ${port}`)
})