import express from "express";
import {
  bookSection,
  creatRoom,
  deleteRoom,
  editRoom,
  getRoomById,
  getRooms,
} from "../controllers/entertainmentController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getRooms);
router.get("/:id", getRoomById);
router.post("/addroom", verifyAdmin, creatRoom);
router.post("/book", verifyUser, bookSection);
router.put("/:id", verifyAdmin, editRoom);
router.delete("/:id", verifyAdmin, deleteRoom);

export default router;
