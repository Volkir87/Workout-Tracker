const express = require("express");
const path = require("path");
const db = require("../../models");

var apiRoutes = express.Router();

apiRoutes.get('/api/workouts', async function(req, res){
    //get and return all workouts
    let result = await db.Workout.find({});
    res.json(result);
});

apiRoutes.put('/api/workouts/:id', function(req, res){
    //add an exercise from the body
});

apiRoutes.post('/api/workouts', function(req, res){
    //create a new workout (no body)
});

apiRoutes.get('/api/workouts/range', async function(req, res){
    //get workouts in range (no body)
    let result = await db.Workout.find({});
    res.json(result);
});

module.exports = apiRoutes;