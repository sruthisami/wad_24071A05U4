import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";

import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", verifyToken, getAllStudents);
router.get("/:id", verifyToken, getStudentById);
router.post("/", verifyToken, createStudent);
router.put("/:id", verifyToken, updateStudent);
router.delete("/:id", verifyToken, deleteStudent);

export default router;