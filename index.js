const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

//custom middleware

function checkForResource(req, res, resource) {
  if (resource.length > 0) {
    res.status(200).json(resource);
  } else {
    res
      .status(404)
      .json({ message: "The resource does not exist or is currently empty." });
  }
}

// endpoints here

server.get("/", (req, res) => {
  res.send("API running....");
});

//COHORTS ENDPOINTS

server.get("/api/cohorts", (req, res) => {
  db("cohorts")
    .then(cohorts => {
      checkForResource(req, res, cohorts);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The cohorts information could not be retrieved." });
    });
});

server.get("/api/cohorts/:id", (req, res) => {
  const { id } = req.params;
  db("cohorts")
    .where({ id })
    .then(cohort => {
      checkForResource(req, res, cohort);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The cohort information could not be retrieved" });
    });
});

server.get("/api/cohorts/:id/students", (req, res) => {
  const { id } = req.params;
  db("students")
    .join("cohorts", "cohorts.id", "students.cohort_id")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .where("students.cohort_id", id)
    .then(students => {
      checkForResource(req, res, students);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The students information could not be retrieved." });
    });
});

server.post("/api/cohorts", (req, res) => {
  const cohort = req.body;

  db.insert(cohort)
    .into("cohorts")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({
        error: "There was an error saving the cohort to the database."
      });
    });
});

server.put("/api/cohorts/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("students")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The cohort information could not be updated" });
    });
});

server.delete("/api/cohorts/:id", (req, res) => {
  const { id } = req.params;

  db("cohorts")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ error: "The cohort could not be deleted" });
    });
});

//STUDENTS ENDPOINTS

server.get("/api/students", (req, res) => {
  db("students")
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The students information could not be retrieved" });
    });
});

server.get("/api/students/:id", (req, res) => {
  const { id } = req.params;
  db("students")
    .join("cohorts", "cohorts.id", "students.cohort_id")
    .select("students.id", "students.name", "cohorts.name as cohort")
    .where("students.id", id)
    .then(student => {
      checkForResource(req, res, student);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The student information could not be retrieved" });
    });
});

server.post("/api/students", (req, res) => {
  const student = req.body;

  db.insert(student)
    .into("students")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({
        error: "There was an error saving the student to the database."
      });
    });
});

server.put("/api/students/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("students")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The student information could not be updated" });
    });
});

server.delete("/api/students/:id", (req, res) => {
  const { id } = req.params;

  db("students")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ error: "The student could not be deleted" });
    });
});

const port = 7000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
