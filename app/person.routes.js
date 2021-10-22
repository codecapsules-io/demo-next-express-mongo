module.exports = app => {
    const person = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new person
    router.post("/", person.create);
  
    // Retrieve all Persons
    router.get("/", person.findAll);
  
    app.use('/api/person', router);
};