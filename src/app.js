//importando modulos de express
import express from "express"
import indexRoutes from "./routes/index.routes.js"
import employesRoutes  from "./routes/employes.routes.js"
//declarando la funcion de express
const app = express()

app.use(express.json())


app.use(indexRoutes)
//dandole un enpoint antes de entrar
app.use("/api",employesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint no existente"
    })
})

export default app;