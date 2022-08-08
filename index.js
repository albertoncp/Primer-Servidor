const express = require("express")//Importo el paquete express a la variable express
const {connect} = require("./db/database")
const app = express();
const DB_URL = `mongodb://localhost:27017/movies`
const misrutas = require("./routes/misrutas")


connect()

const PORT = 5000;//Definimos el puerto de nuestro servidor



app.use(("/", misrutas))

app.use("/hola",(req,res,next) => {
    res.send("holaa")
})


app.listen(PORT,() => {
    console.log(`Server started in http://localhost:${PORT}`)
})
