// importa o express e o path
const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

// inicializa o express
 const app = express()

// conexão com o banco de dados
db.connect()

// lista de sites com permissão para conectar na api
const allowedOrigins = [
    'http://127.0.0.1:5500',
]

// habilita CORS
app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        if (!origin) allowed = true

        if (!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// habilita server para receber dados json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))