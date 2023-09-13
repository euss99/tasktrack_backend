import express from "express";
import morgan from "morgan";
import cors from "cors";

import tasksRoutes from "./routes";

const app = express(); // Creamos una instancia de express

// Middlewares
app.use(cors()); // Usamos cors para permitir peticiones desde cualquier origen
app.use(morgan("dev")); // Usamos morgan para ver las peticiones que llegan al servidor en la consola
app.use(express.json()); // Usamos express.json para que express pueda entender los objetos json que le llegan

// Routes
app.use("/api", tasksRoutes); // Usamos las rutas que creamos en el archivo routes/index.ts

export default app; // Exportamos la instancia por defecto de express
