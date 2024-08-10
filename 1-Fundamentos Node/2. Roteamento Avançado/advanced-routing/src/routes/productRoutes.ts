import { Router } from "express";
import { produtoController } from "../controller/produtoController";

const router = Router();

router.get('/', produtoController.getAllProduct);
router.get('/:id', produtoController.getPorductById);

export default router;