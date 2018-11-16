const server = require('./server.js')

const PORT = process.env.PORT || 9000

//* Sanity Check
server.get('/', (req, res) => {
  res.status(200).json('Server Online!')
})

//* Server Awakens
server.listen(PORT, () =>
  console.log(`\n=== 🦄  Server Listens and Obeys on ${PORT} 🚀  ===\n`)
)
