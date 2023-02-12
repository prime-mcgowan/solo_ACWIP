const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
  // GET route code here
// });

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


//GET Route to get info for just one volunteer
router.get('/', (req,res) => {
  const idOfVolunteerToGet = req.user.id
  const sqlQuery = 
  `
  SELECT 
  volunteer_profiles.first_name,
  volunteer_profiles.last_name, 
  volunteer_profiles.email, 
  volunteer_profiles.birthday, 
  volunteer_profiles.address, 
  volunteer_profiles.apt_suite_number, 
  volunteer_profiles.city, 
  volunteer_profiles.state, 
  volunteer_profiles.zip_code, 
  volunteer_profiles.is_monday_mailers, 
  volunteer_profiles.is_penpal_program ,
  volunteer_profiles.is_operation_holidays,
  volunteer_profiles.is_get_on_the_bus, 
  volunteer_profiles.bio_response
  FROM volunteer_profiles
      WHERE volunteer_profiles.user_id=$1;
  
  `;
  const sqlValues = [idOfVolunteerToGet];
  pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
          res.send(dbRes.rows[0])
      })
      .catch((dbError) => {
          console.log('Error in idOfVolunteerToGet GET route', dbError)
          res.sendStatus(500);
      })
})


//PUT Route
router.put('/', (req, res) => {
  const idToUpdate = req.user.id;
  const sqlQuery = 
  `
  UPDATE volunteer_profiles
      SET
        first_name=$1,
        last_name=$2,
        email=$3,
        birthday=$4,
        address=$5,
        apt_suite_number=$6,
        city=$7,
        state=$8,
        zip_code=$9,
        is_monday_mailers=$10,
        is_penpal_program=$11,
        is_operation_holidays=$12,
        is_get_on_the_bus=$13,
        bio_response=$14
        
        
      WHERE id=$15
  `;
  pool.query(sqlQuery, [req.body.first_name,req.body.last_name, req.body.email,
            req.body.birthday,req.body.address, req.body.apt_suite_number, req.body.city,
            req.body.state, req.body.zip_code, req.body.is_monday_mailers, 
            req.body.is_penpal_program, req.body.is_operation_holidays,
            req.body.is_get_on_the_bus, req.body.bio_response, idToUpdate])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error updating volunteer profile database ${sqlQuery}`)
      res.sendStatus(500);
    });
})
module.exports = router;
