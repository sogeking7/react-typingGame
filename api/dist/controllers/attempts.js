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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScoreboard = exports.addAttempt = exports.getAttemptByUserId = exports.getAllAttempts = void 0;
const attempts_1 = require("../db/attempts");
const getAllAttempts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const races = yield (0, attempts_1.getAll)();
        console.log(races);
        return res.status(200).json(races);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getAllAttempts = getAllAttempts;
const getAttemptByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield (0, attempts_1.getByUserId)(id);
        return res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getAttemptByUserId = getAttemptByUserId;
const addAttempt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, wpm, accuracy } = req.body;
        if (!userId || !wpm || !accuracy) {
            return res.sendStatus(400);
        }
        const existingAttempt = yield (0, attempts_1.getByUserId)(userId);
        if (!existingAttempt) {
            const data = yield (0, attempts_1.createAttempt)({ userId, wpm, accuracy });
            return res.status(200).json(data);
        }
        else {
            const data = yield (0, attempts_1.addNewAttemptToRaces)({ userId, wpm, accuracy });
            return res.status(200).json(data);
        }
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.addAttempt = addAttempt;
const getScoreboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});
exports.getScoreboard = getScoreboard;
//# sourceMappingURL=attempts.js.map