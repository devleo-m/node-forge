import { homeController } from "../controller/homeController";
import { Router } from "express";

export const routeHome = Router();

routeHome.get('/', homeController.getHome);
routeHome.post('/', homeController.postHome);
routeHome.put('/', homeController.putHome);
routeHome.delete('/', homeController.deleteHome);
