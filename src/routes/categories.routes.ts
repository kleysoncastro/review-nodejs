import { response, Router } from "express";

const categoiresRouter = Router();

const categoies = [];

categoiresRouter.post("/categories", (request, response) => {
    const {name, description } = request.body;

categoies.push({
    name, description
});

    return response.status(201).send();
});


export { categoiresRouter };