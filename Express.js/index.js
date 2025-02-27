const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello world!');
})

const PORT = 3000;

app .listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);  // for testing the server.
})