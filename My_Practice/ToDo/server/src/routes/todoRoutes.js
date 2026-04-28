import express from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController.js"
const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/", updateTodo);
router.delete("/", deleteTodo);
export default router;