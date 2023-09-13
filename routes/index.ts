import { Router } from "express";

const router = Router(); // Creamos una instancia de Router

router.get("/tasks", (req, res) => {
  res.send("Tasks list");
}); // Creamos una ruta para el método GET

router.post("/tasks", (req, res) => {
  res.send("Creating a task");
});

router.get("/tasks/:id", (req, res) => {
  res.send("Task id");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("Deleting a task");
});

router.put("/tasks/:id", (req, res) => {
  res.send("Updating a task");
});

export default router; // Exportamos la instancia por defecto de Router
