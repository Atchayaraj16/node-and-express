import express from 'express';
import{
    movieindex,
    moviecreate,
    movieupdate,
    moviedelete,
    

}from '../controllers/movie_contoller.js';
 
const router =express.Router();
// crud functionality of movies
// for reading
router.get('/',movieindex);

// for creation
router.post('/',moviecreate);
//for update
router.put('/:id',movieupdate);
//for delete
router.delete('/:id',moviedelete);
export default router;