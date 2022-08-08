const express = require("express")//Importo el paquete express a la variable express
const mongoose = require("mongoose")
const app = express();
const DB_URL = `mongodb://localhost:27017/movies`
const misrutas = require("./routes/misrutas")

const connect = async () => {
    try{
        const db = await mongoose.connect(DB_URL)
        const {host, port,name} = db.connection
        console.log(`conectado a la bade de datos ${name} en ${host}:${port}`)
    } catch (error){
        console.log("Error conectando a DB", error)
    }
 
}
connect()

const PORT = 5000;//Definimos el puerto de nuestro servidor



misrutas.get("/", (req,res) => {
    res.send("hola a todos")
})

misrutas.get("/movies", (req,res) => {
    const movies = ["harry potter","batman"]
    res.send(movies)
})

app.use(("/", misrutas))

app.use("/hola",(req,res,next) => {
    res.send("holaa")
})


app.listen(PORT,() => {
    console.log(`Server started in http://localhost:${PORT}`)
})
