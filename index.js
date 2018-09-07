
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const PORT = 9000
const server = express()

server.use(helmet())
server.use(express.json())
server.use(morgan('dev'))
server.use(require('./middleware').assignTable)

server.use('/api/projects', require('./routes/projectRoute'))
server.use('/api/actions', require('./routes/actionsRoute'))

server.get('/', (req, res, next) => {
    try {
        throw new Error('blah blah')
    } catch (err) {
        next(err)
    }
});

server.use(require('./middleware').errorHandler)

server.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))