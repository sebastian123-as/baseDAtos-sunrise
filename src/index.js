import app from "./app.js"
import {PORT} from "./config.js"

//escuchando el modulo de express
app.listen(PORT)
console.log("escuchando en", PORT)