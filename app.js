//IMPORTACIONES
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routerNotes from './routers/routerNotes.js'
import routerBuzonQuejas from './routers/routerBuzonQuejas.js'
//CARGAR APP
const app = express()
//CONEXION A LA BASE DE DATOS
try {
    mongoose.connect('mongodb+srv://meyrek:Doremifasol1406@cluster0.lpziroy.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Conexion a la base de datos de forma correcta')
} catch (error) {
    console.log(error)
}
//MILDERWARE
app.use(cors())
app.use(express.json())
//RUTAS
app.use('/notes', routerNotes)
app.use('/buzonQuejas', routerBuzonQuejas)
app.use('/', (req, res) => res.send('Estas en el inicio del API'))
//LEVANTAR EL SERVIDOR
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("El servidor fue levantado"))
