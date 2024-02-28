"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomRace = exports.getAllRaces = void 0;
const fs_1 = __importDefault(require("fs"));
const helpers_1 = require("../helpers");
const json = fs_1.default.readFileSync("./data/data.json");
const data = JSON.parse(json.toString());
const getAllRaces = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const races = data.map((val, index) => ({
            id: index,
            author: val[0],
            title: val[1],
            text: val[2],
        }));
        res.json(races);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getAllRaces = getAllRaces;
const getRandomRace = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const index = (0, helpers_1.getRandom)(1, data.length) - 1;
        const race = {
            id: index,
            author: data[index][0],
            title: data[index][1],
            text: data[index][2],
        };
        res.json(race);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getRandomRace = getRandomRace;
//# sourceMappingURL=races.js.map