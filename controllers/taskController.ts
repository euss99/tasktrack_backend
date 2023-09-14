import { Request, Response } from "express";
import { validateObjectId } from "../utils";
import Task from "../models/Task";

async function getTasks(req: Request, res: Response): Promise<void> {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

async function createTask(req: Request, res: Response): Promise<void> {
  try {
    const { title, description } = req.body;

    const newTask = new Task({ title, description });
    await newTask.save();
    res.json({
      msg: "Task created successfully",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

async function getTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (validateObjectId(id, res)) return;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        msg: "Task not found",
      });
    }

    res.json(task);
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

async function deleteTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (validateObjectId(id, res)) return;

    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({
        msg: "Task not found",
      });
    }

    res.json({
      msg: "Task deleted successfully",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

async function updateTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, description, done } = req.body;

    if (validateObjectId(id, res)) return;

    const updatedTask = await Task.findByIdAndUpdate(id, {
      title,
      description,
      done,
    });

    if (!updatedTask) {
      return res.status(404).json({
        msg: "Task not found",
      });
    }

    res.json({
      msg: "Task updated successfully",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

async function doneTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { done } = req.body;

    if (validateObjectId(id, res)) return;

    const updateTask = await Task.findByIdAndUpdate(id, { done });

    if (!updateTask) {
      return res.status(404).json({
        msg: "Task not found",
      });
    }

    res.json({
      msg: "Task updated successfully",
    });
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

export {
  getTasks,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  doneTask,
};
