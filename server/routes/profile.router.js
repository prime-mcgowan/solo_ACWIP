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
  console.log('***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n***********\n')
  console.log(newVolunteer)

  const queryText = 
  `
    INSERT INTO volunteer_profiles
    ("first_name", "last_name", "email", "birthday", "address", "apt_suite_number",
    "city", "state", "zip_code", "is_monday_mailers", "is_penpal_program", "is_operation_holidays",
    "is_get_on_the_bus", "bio_response", "user_id")
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
  `; 
  
  const queryValues = [
    newVolunteer.firstName,
    newVolunteer.lastName, 
    newVolunteer.email, 
    newVolunteer.birthdate, 
    newVolunteer.address, 
    newVolunteer.apt_suite_number, 
    newVolunteer.city, 
    newVolunteer.state, 
    newVolunteer.zipCode, 
    newVolunteer.mondayMailers, 
    newVolunteer.penpalProgram ,
    newVolunteer.operationHolidays,
    newVolunteer.getOnTheBus, 
    newVolunteer.bioResponse,
    req.user.id
  ]//end queryValues
  pool.query(queryText, queryValues)
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log('newVolunteer POST failed', error);
        res.sendStatus(500);
    })
});//end newVolunteer POST route

// how should i deal with "user_id" in the query???

// "is_monday_mailers", "is_penpal_program", "is_operation_holidays",
// "is_get_on_the_bus"

// , $11, $12, $13, $14


module.exports = router;