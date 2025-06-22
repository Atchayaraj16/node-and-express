import express from 'express';
const app=express()
const port=5000;

app.get('/',(req,res)=>{
    res.json({msg:"hello student"})//thi is react 
});
app.listen(port,()=>
{
    console.log(`server is running at http://localhost:${port}`)
});