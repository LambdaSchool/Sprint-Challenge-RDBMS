const express = require('express');
const helmet = require('helmet');
const knex= require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); 

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive!");
})

server.get('/projects', (req, res) => {
    db('projects')
    .then(project => {
      console.log(project)
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(500).json(err)
    });
  });

  server.post('/projects', (req, res) => {
    const name = req.body;
     db
     .insert(name) 
     .into('projects')
    .then(name => {
      res.status(200).json(name[0])
    })
    .catch(err => {
      res.status(500).json(err)
    });
  })

server.listen(9000, () => console.log('\n Party at part 9k '))