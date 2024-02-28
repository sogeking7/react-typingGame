import {
  getAll,
  getByUserId,
  createAttempt,
  addNewAttemptToRaces,
} from "../db/attempts";
import express from "express";

export const getAllAttempts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const races = await getAll();
    console.log(races);
    return res.status(200).json(races);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAttemptByUserId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const data = await getByUserId(id);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const addAttempt = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId, wpm, accuracy } = req.body;

    if (!userId || !wpm || !accuracy) {
      return res.sendStatus(400);
    }

    const existingAttempt = await getByUserId(userId);

    if (!existingAttempt) {
      const data = await createAttempt({ userId, wpm, accuracy });
      return res.status(200).json(data);
    } else {
      const data = await addNewAttemptToRaces({ userId, wpm, accuracy });
      return res.status(200).json(data);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getScoreboard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
