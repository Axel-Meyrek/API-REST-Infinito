//IMPORTACIONES
import express from 'express'
import {showQuejas, sendQuejas} from '../controllers/controllerBuzonQuejas.js'
//CARGAR ROUTER
const routerBuzonQuejas = express.Router()
//RUTAS
routerBuzonQuejas.get('/', showQuejas)

routerBuzonQuejas.post('/', sendQuejas)


//EXPORTACIONES
export default routerBuzonQuejas