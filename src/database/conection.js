import sql from 'mssql';

const dbSettings = {
    user: 'silva',
    password: 'silva',
    server: 'localhost',
    database: 'prueba_listos',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error(error)
    }
}

export {sql};