import express from 'express';
import movieRouters from './routers/movie_route.js';
import connectdb from './lib/db.js';
const app=express();
const port=5000;

//data understanding middleware
app.use(express.json());// this is for raw data
app.use(express.urlencoded({extended:true}));// this is for form data

//connect DB
connectdb();

app.get('/',(req,res)=>{
    res.json({msg:"hello student"})//thi is react 
});
app.use('/movies',movieRouters);

app.listen(port,()=>
{
    console.log(`server is running at http://localhost:${port}`)
});

