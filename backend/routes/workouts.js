const express = require ('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// Get semua workouts
router.get('/', getWorkouts)

// Get workout sendiri
router.get('/:id', getWorkout)

// POST workout baru
router.post('/', createWorkout)

// Delete workout 
router.delete('/:id', deleteWorkout)

// UPDATE workout 
router.patch('/:id',updateWorkout)




module.exports = router