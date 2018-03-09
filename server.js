const express = require('express');
const bodyParser = require('body-parser');
const projectsRouter = require('./projects/projectsRouter')


const server = express();
const PORT  = 5000;


server.use(bodyParser.json());
server.use('/projects', projectsRouter);

server.get('/', (req, res) => {
  res.status(200).json({api: 'Sucessfully running.'});
})





server.listen(PORT, err => {
  if (err) {
    console.log(`There was an error starting your server on port ${PORT}`);
  } else {
    console.log(`Your server is listening on port ${PORT}`);
  }
});