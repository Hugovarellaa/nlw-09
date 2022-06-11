import { Request, Response, Router } from "express";

import { CategoryRespositories } from "../modules/cars/repositories/CategoriesRespository";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";

const categoriesRouter = Router();
const categoriesRepository = new CategoryRespositories();

categoriesRouter.post("/", (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRouter };
