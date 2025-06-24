import express from 'express';
import{
    movieindex,
    moviedetails,
    moviecreate,
    movieupdate,
    moviedelete,
    

}from '../controllers/movie_controller.js';
 
const router =express.Router();
// crud functionality of movies
// for reading
router.get('/',movieindex);
router.get('/:id',moviedetails);
// for creation
router.post('/',moviecreate);
//for update
router.put('/:id',movieupdate);
//for delete
router.delete('/:id',moviedelete);
export default router;