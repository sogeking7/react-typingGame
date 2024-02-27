import { getAllRaces, getRandomRace, getRaceById} from "../controllers/races";
import express from "express";

export default (router: express.Router) => {
  router.get("/races", getAllRaces);
  router.get("/races/random", getRandomRace);
  router.get("/races/:id", getRaceById);
};
