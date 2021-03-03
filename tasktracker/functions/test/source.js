exports = function(arg){

  const mongodb = context.services.get("mongodb-atlas");

 const PatientDetails= mongodb.db("tracker").collection("SchedulePractitioner");
 
  const newItem = {
 "_partition":"project",
"name":"Prakhya D",
"password":"6789",
"email":"rish@gmail.com",
"role":"Doctor",
"rolename":"Doctor",
"userid":"user1",
"mobile":"78945612",
"facilityname":"c",
"organisationname":"x",
"checkinstatus":true,
"switchaccountstatus":false,
"wardname":"v",
"shiftstartdatettim":new Date(),
"shiftenddatetime":new Date(),
"status":false

};

 PatientDetails.insertOne(newItem)
  .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
  .catch(err => console.error(`Failed to insert item: ${err}`))

};

