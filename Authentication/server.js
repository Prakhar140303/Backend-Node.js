require('dotenv').config();
const expresss = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');
connectToDB();
const app = expresss();
// Middleware
app.use(expresss.json());

app.use('/api/auth',authRoutes);

const  PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`App server started on port ${PORT}`);
});

