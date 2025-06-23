import Movie from '../models/movie_model.js';


export const movieindex=(req,res)=>
{
    res.send('get all movies');
};
export const moviecreate= async (req,res)=>
{
    //create movie info
    //id.title,des

    //validate your data
    const newmovie = new Movie({
        title:req.body.title,
        desc:req.body.desc
    });
   
    try{
        const movie = await newmovie.save(); 
        return res.status(201).json(movie);

    }catch(error){

         return res.status(400).json({message:error.message});
    }

};
export const movieupdate =(req,res)=>
{
     res.send('update all movies');
};
export const moviedelete=(req,res)=>
{
   res.send('delete all movies');
};
