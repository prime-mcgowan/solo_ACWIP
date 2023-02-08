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
  const newVolunteer = req.body;

  const queryText = 
  `
    INSERT INTO volunteer_profiles
    ("first_name", "last_name", "email", "birthday", "address", "apt_suite_number",
    "city", "state", "zip_code", "is_monday_mailers", "is_penpal_program", "is_operation_holidays",
    "is_get_on_the_bus", "bio_response")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  `; 
  
  const queryValues = [
    newVolunteer.first_name,
    newVolunteer.last_name, 
    newVolunteer.email, 
    newVolunteer.birthday, 
    newVolunteer.address, 
    newVolunteer.apt_suite_number, 
    newVolunteer.city, 
    newVolunteer.state, 
    newVolunteer.zip_code, 
    newVolunteer.is_monday_mailers, 
    newVolunteer.is_penpal_program, 
    newVolunteer.is_operation_holidays,
    newVolunteer.is_get_on_the_bus, 
    newVolunteer.bio_response
  ]//end queryValues
  pool.query(queryText, queryValues)
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('newVolunteer POST failed', error);
        res.sendStatus(500);
    })
});//end newVolunteer POST route

// how should i deal with "user_id" in the query???




module.exports = router;