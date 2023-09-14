import mongoose from "mongoose";

export const startConnectionBD = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost/mydatabase"; // Usar un valor predeterminado si MONGO_URI no está definido
    const db = await mongoose.connect(mongoUri); // Conectando a la base de datos
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MongoDB se concetó correctamente: ${url}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};
