const router = require('express').Router() // Require express to create Express router
const {
    getAllUsers,
    addFriend,
    removeFriend,
    getOneUser,
    deleteUser,
    updateUser,
    createNewUser
} = require('../../controllers/userController'); // Require Controller functions

// Define the routes and their HTTP methods
router
  .route('/') // Endpoint: /api/user
  .get(getAllUsers) // HTTP get method to retrieve all users
  .post(createNewUser); // HTTP post method to create a new user

router
.route('/:id') //Endpoint: /api/user/:id
.get(getOneUser) // HTTP get method to retrive one specific user
.put(updateUser) // HTTP put method to update a specific user
.delete(deleteUser) // HTTP delete method to delete a specific user

router
.route('/:id/friends/:friendId') //Endpoint: /api/user/:id/friends/:friendId
.post(addFriend) // HTTP post method to add a friend to a user
.delete(removeFriend) // HTTP delete method to remove a friend from a user


module.exports= router

