//IMPORTACIONES
import express from 'express'
import {lodingNotes, sendNote, deleteNote} from '../controllers/controllerNotes.js'
//CREAR EL ROUTER
const routerNotes = express.Router()

//Rutas sitio/notes
routerNotes.get('/', lodingNotes)

routerNotes.post('/', sendNote)

routerNotes.delete('/:id', deleteNote)

//Exportaciones
export default routerNotes