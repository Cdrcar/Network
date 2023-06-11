const router = require('express').Router(); // Require express to create Express router
const {
    getAllThoughts,
    getOneThought,
    addReaction,
    addThought,
    updateThought,
    removeReaction,
    removeThought
} = require('../../controllers/thoughtController'); // Require Controller functions


// Define the routes and their HTTP methods
router
.route('/') 
.get(getAllThoughts) // HTTP get method to retrive all thoughts
.post(addThought) // HTTP post method to add a new thought

router
.route('/thoughtId') 
.get(getOneThought) // HTTP get method to get one specific thought
.put(updateThought) // HTTP put method tp update a specific thought
.delete(removeThought) //HTTP delete method to delete a specific thought

router
.route('/thoughtId/reactions') 
.post(addReaction) // HTTP post method to add a reaction to a specific thought
.delete(removeReaction) // HTTP delete method to delete a specific reaction to a thought


module.exports = router // Export router for use in other files
