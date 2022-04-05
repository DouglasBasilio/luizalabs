const mongoose = require('mongoose')

function connect() {
    // estabelecendo conexão
    mongoose.connect('mongodb://localhost:27017/db_magalu?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    
    // instância de conexão
    const db = mongoose.connection
    
    // conexão com sucesso
    db.once('open', () => {
        console.log('Connected to database!')
    })
    
    // conexão com erro
    db.on('erro', console.error.bind(console, 'connection error: '))
}

module.exports = {
    connect
}