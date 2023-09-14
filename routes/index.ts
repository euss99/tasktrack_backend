import { Router } from "express";
import {
  getTasks,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  doneTask,
} from "../controllers/taskController";

const router = Router(); // Creamos una instancia de Router

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.get("/tasks/:id", getTaskById);
router.delete("/tasks/:id", deleteTaskById);
router.put("/tasks/:id", updateTaskById);
router.patch("/tasks/:id", doneTask);

export default router; // Exportamos la instancia por defecto de Router
