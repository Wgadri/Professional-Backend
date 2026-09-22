import Task from "../models/Task.js";

export const createTask = async (data) => {
  return Task.create(data);
};

export const getUserTasks = async (userId) => {
  return Task.find({ owner: userId });
};

export const findTaskById = async (id) => {
  return Task.findById(id);
};

export const deleteTask = async (task) => {
  return task.deleteOne();
};