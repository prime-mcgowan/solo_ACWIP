const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const toDo = req.body;
  console.log(toDo);


const queryText = 
`
INSERT INTO to_do_tracker
("to_do", "user_id")
VALUES ($1, $2)
`;

const queryValues = [
    toDo.toDo,
    req.user.id
]
pool.query(queryText, queryValues)
    .then((result) => res.sendStatus(201))
    .catch((error) => {
        console.log('toDo POST in portal.router failed', error);
        res.sendStatus(500);
    })
});

module.exports = router;