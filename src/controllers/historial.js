import { getConnection, sql } from '../database/conection';

export const verHistorial = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM historial ORDER BY id DESC');
        return res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const guardarAcronimo = async (req, res) => {
    if(req.body.acronimo == null) {
        return res.status(400).json('Debe ingresar datos');
    }
    
    try {
        const pool = await getConnection();
        await pool.request().input("acronimo", sql.NVarChar, req.body.acronimo)
        .query('INSERT INTO historial(acronimo) VALUES (@acronimo)');

        return res.status(200).json(req.body);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};