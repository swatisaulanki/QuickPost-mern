const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { connection } = require("./config/db");

require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Quickpost");
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(process.env.PORT, async () => { 
    try {
        await connection();  
        console.log("Connected to the database successfully");
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (err) {
        console.log("Error while connecting to DB");
        console.log(err);
    }
});
