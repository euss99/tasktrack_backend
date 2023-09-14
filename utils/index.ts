import { Response } from "express";
import mongoose from "mongoose";

function validateObjectId(id: string, res: Response) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("The ID is not valid");

    return res.status(400).json({
      msg: error.message,
    });
  }
}

export { validateObjectId };
