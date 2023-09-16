const mongoose = require("mongoose")
const contactschema = mongoose.Schema({
    name: { type: String, require: true },
    number: { type: Number, require: true },
    email:{ type: String, require: true }
})

const contactmodel=mongoose.model("contact",contactschema)

module.exports={contactmodel}