// Mongoose schemas and models for the Thought
const { Schema, model } = require('mongoose');
const dateFormat = require ('../utils/format-date');
const { reactionSchema } = require('./Reaction') // Import Reaction model

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(createdAtVal) { // Getter function to format the timestamp using dateFormat from utils
                return dateFormat(createdAtVal);
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: { // Configuration of schema options - when converting the schema to JSON, include virtuals and getters
            virtuals: true,
            getters: true,
        },
        id: false, // False to exclude the _id field
    }
);
//Define the reactionCount virtual property to get the number of reactions (this property will behave like a regular model field but is not explicity stored in the db: it is calculated based on existed data in the document, but is not stored as a separate field in the db)
thoughtSchema.virtual('reactionCount').get(function () { // Uses a getter function to calculate and return the length of the reactions array
    return this.reactions.length;
});

const Thought = model ('Thought', thoughtSchema);

module.exports = Thought;