// Import Schema and model from Mongoose library
const {Schema, model} = require('mongoose');

// Create a new userSchema using the Schema constructor function
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    // Define the thoughts field within the schema
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref:'Thought'
        }
    ],
    // Each User document to have a list of other User documents as friends
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: { //Options for the schema
        virtuals: true,
        getters: true //Any getter functions defined in the schema will be invoked, and their return values will be included in the JSON representation of the document
    },
    id: false // Excludes the _id field from the JSON representation of the document (Mongoose includes it by default)
});

// Define the virtual property friednCount on the userSchema
userSchema.virtual('friendCount').get(function () {
    return this.friends.lenght
});

// Create the User model using model function
const User = model('User', userSchema);

// Export the User model
module.exports = User;