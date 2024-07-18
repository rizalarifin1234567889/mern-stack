const express = require ('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

// Get semua workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET Semua workouts'})
})

// Get workout sendiri
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET workout sendiri'})
})

// POST workout baru
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST workout baru'})
})

// Delete workout 
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE workout'})
})

// UPDATE workout 
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE workout '})
})




module.exports = router