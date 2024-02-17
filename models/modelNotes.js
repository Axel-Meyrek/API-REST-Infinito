//IMPORTACIONES
import {Schema} from "mongoose";

const SchemaNote = new Schema({
    note: String,
    required: true
})

const Note = mongoose.model('Note', SchemaNote)

//EXPORTACIONES
export default Note