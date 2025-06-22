import express from 'express';
import{
    movieindex,
    moviecreate,
    movieupdate,
    moviedelete,
    

}from '../conrollers/movie_controller.js';
 
const router =express.Router();
// crud functionality of movies
// for reading
router.get('/',movieindex);

// for creation
router.post('/',oviecreate);
//for update
router.put('/:id',movieupdate);
//for delete
router.delete('/:id',moviedelete);
export default router;