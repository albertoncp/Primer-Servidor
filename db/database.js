const mongoose = require("mongoose")

const DB_URL = `mongodb://localhost:27017/movies`

const connect = async () => {
    try{
        const db = await mongoose.connect(DB_URL)
        const {host, port,name} = db.connection
        console.log(`conectado a la bade de datos ${name} en ${host}:${port}`)
    } catch (error){
        console.log("Error conectando a DB", error)
    }
 
}

module.exports = {
    connect
}