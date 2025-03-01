require('dotenv').config();
const expresss = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');
connectToDB();
const app = expresss();
// Middleware
app.use(expresss.json());

app.use('/api/auth',authRoutes);
app.use('/api/home',homeRoutes);
app.use('/api/admin',adminRoutes);

const  PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`App server started on port ${PORT}`);
});

