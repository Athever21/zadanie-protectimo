import {Router} from "express";

import {getAllPersons, createPerson} from "../sevices/personService";

const router = Router();

router
  .route("/")
  .get(getAllPersons)
  .post(createPerson);

export default router;