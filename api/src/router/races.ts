import { getAllAttempts, getAttemptByUserId, addAttempt } from "../controllers/attempts";
import {
  getAllRaces,
  getRandomRace,
} from "../controllers/races";
import express from "express";

export default (router: express.Router) => {
  router.get("/races", getAllRaces);
  router.get("/races/random", getRandomRace);

  router.get("/attempt/", getAllAttempts);
  router.get("/attempt/:id", getAttemptByUserId)
  router.post("/attempt", addAttempt);
};
