const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

workoutSchema.virtual("totalWeight").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.weight;
  }, 0);
});

workoutSchema.virtual("totalSets").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.sets;
  }, 0);
});


workoutSchema.virtual("totalReps").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.reps;
  }, 0);
});

workoutSchema.virtual("totalDistance").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.distance;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
