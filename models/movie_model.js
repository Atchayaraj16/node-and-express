import { model, Schema } from "mongoose";
//write the schema
const mschema= new Schema({
    title:String,
    desc:String
});
// create model
const Movie= model("Movie",mschema);

export default Movie;