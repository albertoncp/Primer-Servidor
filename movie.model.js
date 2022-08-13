const mongoose = require("mongoose")// Importamos mongoose

//Importamos los esquemas de mongoose
const Schema = mongoose.Schema;

//Definimos el Schema de una película

const movieSchema = new Schema({
    title: {type: String, required:true},
    year: {type: Number, required:false},
    poster: {type:String, required:false}
},{
    timestamps:true
})

const Movie = mongoose.model("movies,",movieSchema) 

module.exports = Movie