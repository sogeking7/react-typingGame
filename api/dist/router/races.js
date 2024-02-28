"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attempts_1 = require("../controllers/attempts");
const races_1 = require("../controllers/races");
exports.default = (router) => {
    router.get("/races", races_1.getAllRaces);
    router.get("/races/random", races_1.getRandomRace);
    router.get("/attempt/", attempts_1.getAllAttempts);
    router.get("/attempt/:id", attempts_1.getAttemptByUserId);
    router.post("/attempt", attempts_1.addAttempt);
};
//# sourceMappingURL=races.js.map