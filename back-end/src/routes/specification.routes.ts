import { Router } from "express";

import { specificationController } from "../modules/cars/UseCases/CreateSpecification";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  return specificationController.handle(request, response);
});

export { specificationsRouter };
