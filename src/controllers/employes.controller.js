import { pool } from "../db.js"

//mostrando todos los usuarios
export const getEmployes = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM empleados")
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }
}

//usuario en especifico
export const getEmploye = async (req, res) => {
    try {
        //busca el empleado a partir de un parametro
        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
            req.params.id
        ])

        //si el id no existe
        if (rows.length <= 0) return res.status(404).json({
            message: "empleados no encontrao"
        })

        //lo muestra como el elemento 0
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }
}


//creando nuevos datos
export const createEmployes = async (req, res) => {
    try {
        //desestructura el name y el salary de la req.body (si se desea mas se agregan mas)
        const { name, salary } = req.body
        //aqui es donde se hacen las row en la parte de empleados (en los ?, ? van los datos a poner)
        const [rows] = await pool.query("INSERT INTO empleados(name, salary) VALUES (?, ?)", [name, salary])
        //aqui es donde se ponen los datos
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }
}

//actualizando un usuraio con patch
export const updateEmployes = async (req, res) => {
    const { id } = req.params
    //obteniendo los datos se puede actualizar
    const { name, salary } = req.body
    try {
        //se pueden cambiar
        const [result] = await pool.query("UPDATE empleados SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])

        if (result.affectedRows === 0) return res.status(404).json({
            mennsaje: "Usuario no exista para actualizar"
        })

        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }
}

//actualizando un usuraio con put
export const putEmployes = async (req, res) => {
    const { id } = req.params
    //obteniendo los datos se puede actualizar
    const { name, salary } = req.body

    try {
        
        //se pueden cambiar
        const [result] = await pool.query("UPDATE empleados SET name = ?, salary = ? WHERE id = ?", [name, salary, id])

        if (result.affectedRows === 0) return res.status(404).json({
            mennsaje: "Usuario no exista para actualizar"
        })

        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }
}


//eliminando un usuario
export const deleteEmployes = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: "empleado no existe"
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: "Algo anda mal"
        })
    }

}