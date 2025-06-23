import Movie from '../models/movie_model.js';


export const movieindex=  async (req,res)=>
{
   try{
    const mov = await Movie.find();
    res.json(mov);
   }
   catch(error){
    res.status(500).json({message: error.message});
   }



};


export const moviecreate= async (req,res)=>
{
    //create movie info
    //id.title,jdesc

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
