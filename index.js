const express = require('express')
const mongoose = require('mongoose');
const database = require('./database.json');
const app = express()

app.use(express.json())


//Displays the data
app.get('/api/user', (req, res) => {
    res.send(database);
});

//Allows you to add users
// Add a new user
app.post('/api/user', (req, res) => {
    const newUser = req.body;
    database.push(newUser);
    res.send(newUser);
});


// Update user by Name
app.put('/api/user/:Name', (req, res) => {
    const { Name } = req.params;
    const updatedUser = req.body;

    const index = database.findIndex(user => user.Name === Name);
    if (index !== -1) {
        database[index] = updatedUser;
        res.send(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete user by Name
app.delete('/api/user/:Name', (req, res) => {
    const { Name } = req.params;

    const index = database.findIndex(user => user.Name === Name);
    if (index !== -1) {
        const deletedUser = database.splice(index, 1);
        res.send(deletedUser);
    } else {
        res.status(404).send('User not found');
    }
});




// // Connect to MongoDB database
mongoose.connect("mongodb+srv://cheemam0807:Alic1234.@cluster0.qbc0qx2.mongodb.net/Node_API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('connected to data base');
    app.listen(3000,()=>{
        console.log('server is running on port 3000')
    })
})
.catch(()=> {
    console.log('faled');
})
