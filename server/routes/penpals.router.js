const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET Route for ALL Penpals
 */
router.get('/', (req, res) => {
  console.log('in penpals.router GET Route for all penpals')

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
        console.log('penpals.router GET Route for all penpals failed', dbErr)
        res.sendStatus(500);
    })
});


router.get('/', (req, res) => {
    console.log('in penpals.router GET for matched penpal details')

    const sqlQuery = 
    `
    SELECT "name", "bio_response"
    FROM "volunteers_penpals"
	    WHERE "user_id"=$1
    `;
    pool.query(sqlQuery)
        .then(dbRes => {
            res.send(dbRes.rows)
        })
        .catch(dbErr => {
            console.log('penpals.router GET Route for penpal details failed', dbErr)
        })
})

//Looked at: bikes router
// router.get('/:id', (req, res) => {
//         const penpalId = req.params.penpal_id
//         console.log('GET request for penpal id', penpalId)
//         const sqlQuery = 
//         `   	
//         SELECT * FROM "penpals"
//         WHERE "penpal_id"=$1;
//         `;
//         const sqlValues = [penpalId]
//         pool.query(sqlQuery, sqlValues)
//             .then(dbRes => {
//                 res.send(dbRes.rows[0])
//             })
//             .catch((error) => {
//                 console.log('GET Route for ONE penpal_id failed', error);
//                 res.sendStatus(500);
//             });
//     });

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const newMatch = req.body;
  console.log('***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n')
  console.log(newMatch)

  const sqlQuery = 
  `
  INSERT INTO "volunteers_penpals"
  ("user_id", "penpal_id", "name", "bio_response")
  VALUES
  ($1, $2, $3, $4)
  `;

  const queryValues = [
    newMatch.user_id,
    newMatch.penpal_id,
    newMatch.name,
    newMatch.bio_response
  ]
  pool.query(sqlQuery, queryValues)
    .then((response) => res.sendStatus(201))
    .catch((error) => {
        console.log('newMatch POST Route failed in penpals.router', error)
        res.sendStatus(500);
    })
});

module.exports = router;

//Looked at: bikes router
//Origianl route
// router.get('/:id', (req, res) => {
//     const penpalId = req.params.penpal_id
//     console.log('GET request for penpal id', penpalId)
//     const sqlQuery = 
//     `   	
//     SELECT penpals.penpal_id 
//     FROM penpals
//         WHERE penpal_id=$1;
//     `;
//     const sqlValues = [penpalId]
//     pool.query(sqlQuery, sqlValues)
//         .then(dbRes => {
//             res.send(dbRes.rows[0])
//         })
//         .catch((error) => {
//             console.log('GET Route for ONE penpal_id failed', error);
//             res.sendStatus(500);
//         });
// });