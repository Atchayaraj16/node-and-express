import Movie from '../models/movie_model.js';


export const movieindex=  async (req,res)=>//get all movies
{
   
   try{
    const movie = await Movie.find();
    res.json(movie);
   }
   catch(error){
    res.status(500).json({message: error.message});
   }



};



export const moviedetails=  async (req,res)=>//get movies by id
{
   
   try{
    const movie = await Movie.findById(req.params.id);//req.params.id is the input parameter to search
    if(movie == null)
    {
        return res.status(404).json({message: 'movie not found'});
    }
    else {
        res.json(movie);
    }
   }
   catch(error){
    res.status(500).json({message: error.message});
   }



};


export const moviecreate= async (req,res)=>
{
    //create movie info
    //id.title,desc

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
export const movieupdate = async (req,res)=>
{
    try{
       const updatedmovie= await Movie.findOneAndUpdate(
        {_id:req.params.id.trim()},    //req.params.id is the input parameter to search
        {
            title:req.body.title,
            desc:req.body.desc,
        },
        {new:true});
        res.status(200).json(updatedmovie);

    } catch(error){
             return res.status(400).json({message:error.message});

        }
        
    
    
};
export const moviedelete= async (req,res)=>
{
    const movieid= req.params.id.trim();
   try{
       await Movie.deleteOne({_id:movieid});
       res.json({message: 'movie deleted'});

    } catch(error){
             return res.status(500).json({message:error.message});

        }
        
};
