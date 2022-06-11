import { Request, Response, Router } from "express";

import { CategoryRespositories } from "../modules/cars/repositories/CategoriesRespository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryServices";

const categoriesRouter = Router();
const categoriesRepository = new CategoryRespositories();

categoriesRouter.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRouter };
