const express = require('express');

const projects = require('./projectController');

const projectRouter = express.Router();

projectRouter.post('/', function(req, res) {
  const user = req.body;

  projects
    .insert(project)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectRouter.get('/', function(req, res) {
  projects
    .get()
    .then(function(users) {
      res.status(200).json(users);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .get(id)
    .then(function(user) {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectRouter.get('/:id/posts', function(req, res) {
  const { id } = req.params;

  projects
    .getProjectActions(id)
    .then(function(posts) {
      res.status(200).json(posts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .update(id, req.body)
    .then(function(count) {
      if (count > 0) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

projectRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  projects
    .remove(id)
    .then(function(count) {
      res.status(200).json({ count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = projectRouter;
