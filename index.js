const express = require("express")//Importo el paquete express a la variable express
const {connect} = require("./db/database")
const app = express();
const dotenv = require("dotenv")
const DB_URL = `mongodb://localhost:27017/movies`
const misrutas = require("./routes/misrutas")


connect()

const PORT = 5000;//Definimos el puerto de nuestro servidor

dotenv.config()

/* const P0RT = process.env.PORT || 5000 */

app.use(("/", misrutas))

app.use("/hola",(req,res,next) => {
    res.send("holaa")
})


app.listen(PORT,() => {
    console.log(`Server started in http://localhost:${PORT}`)
})
