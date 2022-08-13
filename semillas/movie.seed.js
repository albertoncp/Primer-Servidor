const mongoose = require("mongoose")

const Movie = require("../movie.model")

const movies = [
    {
        title:"Star wars",
        year: 1977,
    },
    {
        title:"Top Gun",
        year:1998
    },
]

const moviesDocuments = movies.map((movie) => new Movie(movie))

mongoose.connect("mongodb+srv://root:root@cluster0.mny81aw.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser :true
}).then(async () => {
    const allMovies = await Movie.find()

    if(allMovies.length){
        await Movie.collection.drop()
        console.log("movies db deleted")
    }

}).catch((error) => console.log(`Error deleting movies ${error}`)).then(async () =>{

    await Movie.insertMany(moviesDocuments)

}).catch((error) => {
    console.log(`Error creating movies ${error}`)

}).finally(() => mongoose.disconnect())