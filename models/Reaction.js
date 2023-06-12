// Mongoose schemas and models for the Reaction
const { Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/format-date');

// Define the reactionSchema
const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId, // Unique identifier provided by Mongoose
        default: () => new Types.ObjectId(), // Generates a new ObjectId using the Types.ObjectId constructor (if a reactionId is not explicitly provided when creating a new reaction, a new ObjectId will be automatically generated as the default value)
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAtVal) {  // Getter function to format the timestamp 
            return dateFormat(createdAtVal); // Formatting the timestamp using the dateFormat utility function
        },
    },
},
{
    toJSON: {
        getters: true, // Include getters when converting to JSON
    },
    _id: false, // Exclude de _id field
});

//Create Reaction model
const Reaction = model('Reaction', reactionSchema);
// Export the Reaction model
module.exports = { reactionSchema, Reaction };