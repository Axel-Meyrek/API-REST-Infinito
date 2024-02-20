//IMPORTACIONES
import express from 'express'
import cors from 'cors'
import routerNotes from './routers/routerNotes.js'
//CARGAR APP
const app = express()
//MILDERWARE
app.use(cors())
app.use(express.json())
//RUTAS
app.use('/notes', routerNotes)
app.use('/', (req, res) => res.send('Estas en el inicio del API'))
//LEVANTAR EL SERVIDOR
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("El servidor fue levantado"))