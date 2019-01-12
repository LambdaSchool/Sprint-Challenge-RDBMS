const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

/* ---------- Routes ---------- */



/* ---------- Export ---------- */
module.exports = router;