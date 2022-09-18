const mongoose = require('mongoose');

const databaseName = "Hritik46";
const url=`mongodb+srv://Hritikarya:arya321@cluster0.z26edep.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// connect to database
// async function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;

// 1. Asynchronous - simultaneously
// 2. Synchronous - one by one