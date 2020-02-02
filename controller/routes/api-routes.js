const express = require("express");
const path = require("path");
const db = require("../../models");

var apiRoutes = express.Router();

apiRoutes.get('/api/workouts', async function(req, res){
    //get and return all workouts
    let result = await db.Workout.find({});
    res.json(result);
});

apiRoutes.put('/api/workouts/:id', async function(req, res){
    //add an exercise from the body
    let id = req.params.id;
    let exercise = req.body;
    if (!id) {
        console.log('not ID!');
    } else {
        await db.Workout.findByIdAndUpdate(id, {$push: {exercises: exercise}});
        res.json({'id': id});
    }
});

apiRoutes.post('/api/workouts', async function(req, res){
    //create a new workout (no body) AQCHUALLY this route is not used anywhere in the code 
    let workout = new Workout({exercises: []});
    workout.save();
});

apiRoutes.get('/api/workouts/range', async function(req, res){
    //get workouts in range (no body)
    let result = await db.Workout.find({});
    res.json(result);
});

module.exports = apiRoutes;