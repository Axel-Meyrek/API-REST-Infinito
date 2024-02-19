//IMPORTACIONES
import bdBuzonQuejas from '../dataBase/dbBuzonQuejas.js'

//Funciones
//MOSTRAR TODAS LAS QUEJAS
const showQuejas = async (req, res) => {
    try {
        res.json(bdBuzonQuejas)
    } catch (error) {
        console.log(error)
    }
}

//ENVIAR UNA QUEJA
const sendQueja = () => {
    res.send("Enviando Queja")
}

//ELIMINAR UNA QUEJA
const deleteQueja = async (req, res) => {

    const quejas = bdBuzonQuejas.quejas
    const id = req.params.id
    console.log(id)

    let positionDelete
    for (let i = 0; i < quejas.length; i++) {
        console.log(quejas[i].id)

        if (quejas[i].id == id) {
            positionDelete = i+1
            break;
        }
    }
    console.log(positionDelete)
    if (positionDelete != undefined) {
        res.send("Eliminado")
    } else {
        res.send("La queja que quieres eliminar no fue encontrada")
    }


}


//Exportaciones
export { showQuejas, sendQueja, deleteQueja }