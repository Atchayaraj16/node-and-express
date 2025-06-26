import express from 'express';
import cors from 'cors';
import movieRouters from './routers/movie_route.js';
import connectdb from './lib/db.js';
const app=express();
const port= process.env.PORT || 5000;



app.use(cors());

//data understanding middleware
app.use(express.json());// this is for raw data
app.use(express.urlencoded({extended:true}));// this is for form data

//connect DB
connectdb();

app.get('/',(req,res)=>{
    res.json({msg:"hello student"})
});
app.use('/movies',movieRouters);

app.listen(port,()=>
{
    console.log(`server is running at http://localhost:${port}`)
});

