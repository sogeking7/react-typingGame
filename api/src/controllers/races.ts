import express from 'express'
import fs from 'fs';
import { getRandom } from '../helpers';

const json = fs.readFileSync("./data/data.json");
const data:Array<Array<any>> = JSON.parse(json.toString());

export const getAllRaces = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const races = data.map((val, index) => ({
      id: index,
      author: val[0],
      title: val[1],
      text: val[2],
    }))
    res.json(races);
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const getRandomRace = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const index = getRandom(1, data.length) - 1;
    const race = {
      id: index,
      author: data[index][0],
      title: data[index][1],
      text: data[index][2],
    }
    res.json(race);
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const getRaceById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = +req.params.id;
    const race = {
      id,
      author: data[id][0],
      title: data[id][1],
      text: data[id][2],
    }
    res.json(race);
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}