import {Router} from "express"
import {getEmployes, createEmployes, updateEmployes, putEmployes, deleteEmployes, getEmploye} from "../controllers/employes.controller.js"

const router = Router()

//enmpoints y se le pueden colocar las rutas deseadas

//Obtener todos los usuarios
router.get("/employess", getEmployes)

//obteniendo un usuario especifico
router.get("/employess/:id", getEmploye)

//crear nuevo usuario
router.post("/employess", createEmployes)

//actualizar un empleado con datos especificos
router.patch("/employess/:id", updateEmployes)

//actualizando un empleado totalmente
router.put("/employess/:id", putEmployes)


//eliminar un empleado
router.delete("/employess/:id", deleteEmployes)

export default router