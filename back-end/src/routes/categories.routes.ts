import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";
import { listCategoriesController } from "../modules/cars/UseCases/ListCategories";

const categoriesRouter = Router();
const upload = multer({ dest: "./tmp" });

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  response.send();
});

export { categoriesRouter };
