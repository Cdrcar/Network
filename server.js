const express = require('express');
const mongoose = require ('mongoose');

//// Initialize an Express application and set up middleware
const app = express();
const PORT =  process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes'));

//Connect to the MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/socialnetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Enable MongoDB query logging
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`API server running on port ${PORT}`))