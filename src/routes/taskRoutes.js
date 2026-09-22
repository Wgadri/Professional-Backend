import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createTask, getTasks, removeTask } from "../controllers/taskController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getTasks);
router.delete("/:id", removeTask);

export default router;