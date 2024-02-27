import express from "express";

import authentication from "./authentication";
import users from "./users";
import races from "./races";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  races(router);
  return router;
};
