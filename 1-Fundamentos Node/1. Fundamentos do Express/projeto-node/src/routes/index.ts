import { Router } from "express";
import { homeController } from "../controllers/homeController";

const router = Router();

router.get("/", homeController.getHome);
router.post("/post", homeController.postHome);
router.put("/put", homeController.putHome);
router.delete("/delete", homeController.deleteHome);

export default router;