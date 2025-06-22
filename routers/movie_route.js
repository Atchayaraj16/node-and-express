import express from 'express';
 
const router =express.Router();
// crud functionality of movies
// for reading
router.get('/',(req,res)=>
{
    res.send('get all movies');
})
// for creation
router.post('/',(req,res)=>
{
    res.send('create all movies');
})
//for update
router.put('/:id',(req,res)=>
{
     res.send('update all movies');
})

//for delete
router.delete('/:id',(req,res)=>
{
   res.send('delete all movies');
})
export default router;