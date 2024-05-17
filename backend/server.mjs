import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let connection;

(async function() {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  console.log('Connected to MySQL');
})();

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  const { correo_electronico, contraseña } = req.body;
  const query = 'SELECT * FROM usuarios WHERE correo_electronico = ? AND contraseña = ?';

  try {
    const [results] = await connection.execute(query, [correo_electronico, contraseña]);
    if (results.length > 0) {
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Ruta para registrarse
app.post('/register', async (req, res) => {
  const { correo_electronico, contraseña } = req.body;
  const query = 'INSERT INTO usuarios (correo_electronico, contraseña) VALUES (?, ?)';

  try {
    await connection.execute(query, [correo_electronico, contraseña]);
    res.json({ success: true, message: 'Usuario registrado exitosamente' });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.json({ success: false, message: 'El correo electrónico ya está registrado' });
    } else {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
  }
});

// Ruta para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  const query = 'SELECT * FROM usuarios';

  try {
    const [results] = await connection.execute(query);
    res.json({ success: true, usuarios: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

// Ruta para eliminar un usuario por su ID
app.delete('/usuarios/:id', async (req, res) => {
  const idUsuario = req.params.id;
  const query = 'DELETE FROM usuarios WHERE id = ?';

  try {
    const [result] = await connection.execute(query, [idUsuario]);
    if (result.affectedRows > 0) {
      res.json({ success: true, message: 'Usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
