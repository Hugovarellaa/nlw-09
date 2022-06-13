import { Router } from "express";

import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";
import { listCategoriesController } from "../modules/cars/UseCases/ListCategories";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRouter };
