const express= require('express');

const app = express();

const myFirstMiddleware = (req,res,next)=>{
    console.log('First middleware');
    next(); // reomving it will stop the reinitation of the middleware
};

app.use(myFirstMiddleware);

app.get('/', (req,res) => {
    res.send('Home page ');
});

app.get('/about',(req,res)=>{
    res.send('About page');
})
app.listen(3000,()=>{
    console.log(`Server is now running on http://localhost:3000`);
    
})
