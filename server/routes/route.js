import express from "express";
import {
  addUser,
  getUser,
  getUsers,
  editUser,
  deleteUser,
  getSearch,
} from "../controller/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.get("/search/:id", getSearch);
router.get("/view/:id", getUser);

export default router;
