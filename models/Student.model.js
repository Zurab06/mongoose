const mongoose = require("mongoose")
const studentschema = mongoose.Schema({
    name: String,
    phone: String,
    age: Number
})
const Student = mongoose.model('Student', studentschema)
module.exports = Student