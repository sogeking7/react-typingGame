"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.createAttempt = exports.addNewAttemptToRaces = exports.getByUserId = exports.getAll = exports.AttemptModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const AttemptSchema = new mongoose_1.default.Schema({
    races: [
        {
            type: {
                wpm: {
                    type: Number,
                    required: true,
                },
                accuracy: {
                    type: Number,
                    required: true,
                },
                date: {
                    type: Date,
                    default: Date.now,
                },
            },
            required: true,
        },
    ],
    created_on: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});
exports.AttemptModel = mongoose_1.default.model("Attempt", AttemptSchema);
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.AttemptModel.aggregate([
        // Unwind the races array
        { $unwind: "$races" },
        // Group by userId and find the maximum wpm for each user
        {
            $group: {
                _id: "$userId",
                maxWpm: { $max: "$races.wpm" },
                accuracy: { $first: "$races.accuracy" },
                date: { $first: "$races.date" },
            },
        },
        // Sort by maxWpm in descending order
        {
            $sort: { maxWpm: -1 },
        },
        // Project only the fields you need
        {
            $project: {
                _id: 0,
                userId: "$_id",
                maxWpm: 1,
                accuracy: 1,
                date: 1,
            },
        },
        // Populate the userId field to get the associated user information
        {
            $lookup: {
                from: "users", // This should be the name of your users collection
                localField: "userId",
                foreignField: "_id",
                as: "user",
            },
        },
        // Unwind the user array to get a single document per user
        {
            $unwind: "$user",
        },
        // Project only the necessary fields from the user
        {
            $project: {
                username: "$user.username",
                email: "$user.email",
                maxWpm: 1,
                accuracy: 1,
                date: 1,
            },
        },
    ]);
});
exports.getAll = getAll;
const getByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.AttemptModel.findOne({ userId: userId }).populate("userId", "username email");
});
exports.getByUserId = getByUserId;
const addNewAttemptToRaces = (Attempt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.AttemptModel.updateOne({ userId: Attempt.userId }, { $push: { races: Attempt } });
});
exports.addNewAttemptToRaces = addNewAttemptToRaces;
const createAttempt = (Attempt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.AttemptModel.create({
        userId: Attempt.userId,
        races: [Attempt],
    });
});
exports.createAttempt = createAttempt;
//# sourceMappingURL=attempts.js.map