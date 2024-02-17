//FUNCIONES
const lodingNotes = (req, res) => {
    res.send("Cargando notas")
}

const sendNote = (req, res) => {
    res.send('Enviando nota')
}





//EXPORTACIONES


export {lodingNotes, sendNote}