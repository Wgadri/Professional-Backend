import {
  createTask as createTaskDB,
  getUserTasks,
  findTaskById,
  deleteTask
} from "../repositories/taskRepository.js";

export const createTask = async (req, res, next) => {
  try {
    const task = await createTaskDB({
      ...req.body,
      owner: req.user._id
    });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await getUserTasks(req.user._id);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const removeTask = async (req, res, next) => {
  try {
    const task = await findTaskById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await deleteTask(task);
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
