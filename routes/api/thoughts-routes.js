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

router
.route('/')
.get(getAllThoughts)
.post(addThought)

router
.route('/thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(removeThought)

router
.route('/thoughtId/reactions')
.post(addReaction)
.delete(removeReaction)


module.exports = router
