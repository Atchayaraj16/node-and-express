import { model, Schema } from "mongoose";
//write the schema
const mschema= new Schema({
    title:{
       type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
         required:true,
    } 

});
// create model
const Movie= model("Movie",mschema);

export default Movie;