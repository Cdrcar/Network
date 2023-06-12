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
.route('/')  // Endpoint: /api/thoughts
.get(getAllThoughts) // HTTP get method to retrive all thoughts
.post(addThought) // HTTP post method to add a new thought

router
.route('/:thoughtId') //Endpoint: /api/thoughts/thoughtId
.get(getOneThought) // HTTP get method to get one specific thought
.put(updateThought) // HTTP put method tp update a specific thought
.delete(removeThought) //HTTP delete method to delete a specific thought

router
.route('/:thoughtId/reactions') //Endpoint: /api/thoughts/thoughtId/reactions
.post(addReaction) // HTTP post method to add a reaction to a specific thought
.delete(removeReaction) // HTTP delete method to delete a specific reaction to a thought // example: http://localhost:3001/api/thoughts/64872c493daada806848fd69/reactions?reactionId=64873b946d9b18eb8e67ac0c


module.exports = router // Export router for use in other files
