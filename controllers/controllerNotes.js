//IMPORTACIONES
import dbNotes from '../dataBase/dbNotes.js'

//FUNCIONES
const lodingNotes = async (req, res) => {
    try {
        res.json(dbNotes)
    } catch (error) {
        console.log(error)
    }
}

const sendNote = async (req, res) => {
    try {
        const { note, date, user } = req.body
        dbNotes.push({
            id: dbNotes.length + 1,
            note,
            date,
            user
        })
        res.send('La nota se ha creado correctamente')
    } catch (error) {
        console.log(error)
    }

}

const deleteNote = async (req, res) => {
    try {
        //Capturar el id del elemento
        const id = req.params.id

        //Buscar id
        const indiceDelete = dbNotes.findIndex(note => note.id == id)
        if (indiceDelete != -1) {
            dbNotes.splice(indiceDelete, 1)
            res.send('La nota fue eliminada correctamente')
        } else {
            res.send('La nota no fue eliminada correctamente')
        }
    } catch (error) {
        console.log(error)
    }
}

//EXPORTACIONES
export { lodingNotes, sendNote, deleteNote }