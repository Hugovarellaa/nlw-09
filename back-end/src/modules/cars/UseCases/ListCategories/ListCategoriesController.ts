import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private categoriesRepositories: ListCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const categories = this.categoriesRepositories.execute();

    return response.json(categories);
  }
}

export { ListCategoriesController };
