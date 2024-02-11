import {Router} from "express";
import {ping} from "../controllers/index.controller.js"

const router = Router();

//consulta a la base de datos viendo que funcione
router.get("/ping", ping)

export default router;