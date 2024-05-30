import express from "express";
import mysql from "mysql2/promise";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import util from "util";

dotenv.config();
const readdir = util.promisify(fs.readdir);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

let connection;

const startServer = async () => {
  try {
      const connection = await mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
         
      });

      console.log('Connected to the database successfully');
      // Inicia tu servidor aquí

  } catch (error) {
      console.error('Error connecting to the database:', error);
  }
};

startServer();

// Ruta para iniciar sesión
app.post("/login", async (req, res) => {
  const { correo_electronico, contraseña } = req.body;
  const query =
    "SELECT * FROM usuarios WHERE correo_electronico = ? AND contraseña = ?";

  try {
    const [results] = await connection.execute(query, [
      correo_electronico,
      contraseña,
    ]);
    if (results.length > 0) {
      res.json({ success: true, message: "Inicio de sesión exitoso" });
    } else {
      res.json({ success: false, message: "Usuario o contraseña incorrectos" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});


// Ruta para registrarse
app.post("/register", async (req, res) => {
  const { correo_electronico, contraseña } = req.body;
  const query =
    "INSERT INTO usuarios (correo_electronico, contraseña) VALUES (?, ?)";

  try {
    await connection.execute(query, [correo_electronico, contraseña]);
    res.json({ success: true, message: "Usuario registrado exitosamente" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      res.json({
        success: false,
        message: "El correo electrónico ya está registrado",
      });
    } else {
      console.error(err);
      res.status(500).json({ success: false, message: "Error en el servidor" });
    }
  }
});

// Ruta para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
  const query = "SELECT * FROM usuarios";

  try {
    const [results] = await connection.execute(query);
    res.json({ success: true, usuarios: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});
// Ruta para restablecer la contraseña
app.post("/reset-password", async (req, res) => {
  const { correo_electronico, nueva_contraseña } = req.body;
  const query = "UPDATE usuarios SET contraseña = ? WHERE correo_electronico = ?";

  try {
    const [result] = await connection.execute(query, [nueva_contraseña, correo_electronico]);
    if (result.affectedRows > 0) {
      res.json({ success: true, message: "Contraseña restablecida exitosamente" });
    } else {
      res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor", error: err.message });
  }
});

// Ruta para eliminar un usuario por su ID
app.delete("/usuarios/:id", async (req, res) => {
  const idUsuario = req.params.id;
  const query = "DELETE FROM usuarios WHERE id = ?";

  try {
    const [result] = await connection.execute(query, [idUsuario]);
    if (result.affectedRows > 0) {
      res.json({ success: true, message: "Usuario eliminado exitosamente" });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Configuración de multer para almacenar las imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Ruta para subir imágenes
app.post("/upload", upload.array("images", 5), async (req, res) => {
  const { usuario_id } = req.body;
  const files = req.files;

  try {
    for (const file of files) {
      const query =
        "INSERT INTO images (usuario_id, name, data) VALUES (?, ?, ?)";
      await connection.execute(query, [
        usuario_id,
        file.originalname,
        file.path,
      ]);
    }
    res.json({ success: true, message: "Imágenes subidas exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Ruta para obtener imágenes de un usuario
app.get("/imagenes/:usuario_id", async (req, res) => {
  const usuario_id = req.params.usuario_id;

  const query = "SELECT * FROM images WHERE usuario_id = ?";
  try {
    const [results] = await connection.execute(query, [usuario_id]);
    res.json({ success: true, imagenes: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

//Ruta para obtener todas las imagenescd backend

app.get("/all-images", async (req, res) => {
  try {
    const files = await readdir(path.join(__dirname, "uploads"));
    res.json({ success: true, images: files });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

// Ruta para eliminar una imagen por su nombre
app.delete("/delete-image/:nombreImagen", async (req, res) => {
  const nombreImagen = req.params.nombreImagen;

  try {
    const filePath = path.join(__dirname, "uploads", nombreImagen);
    await fs.promises.unlink(filePath);
    res.json({ success: true, message: "Imagen eliminada exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
});

const PORT = process.env.PORT || 3300

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});