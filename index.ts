import app from "./app";
import dotenv from "dotenv";
import { startConnectionBD } from "./database";

// Variables de entorno
dotenv.config();

// Conectar a la BD
startConnectionBD();

app.listen(3000); // Iniciamos el servidor en el puerto 3000

console.log(`Server in http://localhost:3000`);
