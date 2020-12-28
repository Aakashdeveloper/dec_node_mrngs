const express = require('express');
const app = express();
const db = require('./db');
const port = 5000;

const AuthController = require('./auth/authController');
app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`Server is running on the port ${port}`)
})