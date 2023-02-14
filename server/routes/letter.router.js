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
  const newLetter = req.body;
  console.log('***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n')
  console.log(newLetter)

// CREATE TABLE "letters" (
	// "letter_id" serial NOT NULL,
	// "to" varchar(255) NOT NULL,
	// "from" varchar(255) NOT NULL,
	// "date" DATE NOT NULL,
	// "subject" varchar(255) NOT NULL,
	// "letter_contents" varchar(255) NOT NULL,
	// "user_id" INT REFERENCES "user", 
	// "penpal_id" INT REFERENCES "penpal"

//     INSERT INTO "letters"
// 	("to", "from", "date", "subject", "letter_contents")
// VALUES('Roseanna', 'Laura', '02-13-2023', 'hello', 'nice to meet you');


  const sqlQuery = 
  `
  INSERT INTO letters
  ("to", "from", "date", "subject", 
  "letter_contents", "user_id")
  VALUES 
  ($1, $2, $3, $4, $5, $6)
  `;

  const queryValues = [
    newLetter.to,
    newLetter.from, 
    newLetter.date, 
    newLetter.subject, 
    newLetter.letterContents,
    req.user.id,
  ]
  pool.query(sqlQuery, queryValues)
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('newLetter POST failed', error);
        res.sendStatus(500);
    })
 
});

module.exports = router;
