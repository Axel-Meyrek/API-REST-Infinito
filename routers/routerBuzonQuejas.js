//IMPORTACIONES
import express from 'express'
import {showQuejas, sendQueja, deleteQueja} from '../controllers/controllerBuzonQuejas.js'
//CARGAR ROUTER
const routerBuzonQuejas = express.Router()
//RUTAS
routerBuzonQuejas.get('/', showQuejas)

routerBuzonQuejas.post('/', sendQueja)

routerBuzonQuejas.delete('/:id', deleteQueja)


//EXPORTACIONES
export default routerBuzonQuejas