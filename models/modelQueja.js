//IMPORTACIONES
import mongoose from "mongoose";

const SchemaQueja = mongoose.Schema({
    queja: String,
    required: true
})

const Queja = model('Queja', SchemaQueja)

export default Queja