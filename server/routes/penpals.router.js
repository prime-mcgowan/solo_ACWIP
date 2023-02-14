const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET Route for ALL Penpals
 */
router.get('/', (req, res) => {
  console.log('GET Route for all penpals')

  const sqlQuery = 
  `
  SELECT * FROM "penpals"
	ORDER BY "name" ASC;
  `;
  pool.query(sqlQuery)
    .then(dbRes => {
        res.send(dbRes.rows)
    })
    .catch(dbErr => {
        console.log('GET Route for all penpals failed', dbErr)
        res.sendStatus(500);
    })
});


//Looked at: movie.router and shelf router
router.get('/:id', (req, res) => {
    const penpalId = req.params.id
    console.log('GET request for penpal id', penpalId)
    const sqlQuery = 
    `   	
    SELECT "penpal_id" FROM "penpals";
    `;
    pool.query(sqlQuery, [penpalId])
        .then(result => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('GET Route for ONE penpal_id failed', error);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;