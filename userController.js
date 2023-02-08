const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://umair:jabba@cluster0.6gdsha9.mongodb.net/test").then(() => {
    console.log("MoognoDB connect successfuly")
}).catch((err) => {
    console.log(err)
})

// const userRegister = (req, res) => {


//     const student = new mongoose.Schema({
//         name: String,
//         email: String,
//         pass: String,
//     })
//     const Student = new mongoose.model("Form", student)
//     const addStudent = async () => {
//         const studentList = await Student.create({
//             name: req.body.name,
//             email: req.body.email,
//             pass: req.body.password
//         })
//     }
//     addStudent()
//     res.json({
//         success: true,
//     })
// }
const student = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
})

const Student = new mongoose.model("Form", student)


const register = async (req, res) => {

    try {
        const { name, email, pass } = req.body

        await Student.findOne({ email })
            .then(async (response) => {
                if (response) {
                    console.log("user exits")
                }
                else {
                    await Student.create({
                        name,
                        email,
                        pass,

                    })
                    console.log("use")
                }

            }).catch((err) => {
                console.log("err", err)
            })



    }

    catch (err) {
        console.log("err", err)
    }


}
module.exports = register