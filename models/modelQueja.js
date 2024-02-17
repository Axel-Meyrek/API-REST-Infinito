//IMPORTACIONES
import {Schema} from "mongoose";

const SchemaQueja = new Schema({
    queja: String,
    required: true
})

const Queja = model('Queja', SchemaQueja)

export default Queja