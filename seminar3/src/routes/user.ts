import { Router } from "express";
import UserController from "../controllers/UserController";

const router: Router = Router();

// routes => user (/user) => post (/)
router.get("/", UserController.readUsers);
router.get("/:userId", UserController.readUser);
router.post("/", UserController.createUser);
router.put("/:userId", UserController.updateUser);
router.delete("/:userId", UserController.deleteUser);

export default router;
