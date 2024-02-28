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
exports.updateUserById = exports.deleteUserById = exports.createUser = exports.getUserById = exports.getUserBySessionToken = exports.getUserByEmailSelect = exports.getUserByEmail = exports.getUsers = exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    attemptId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Attempt'
    },
    authentication: {
        password: {
            type: String,
            required: true,
            select: false,
        },
        salt: {
            type: String,
            select: false,
        },
        sessionToken: {
            type: String,
            select: false,
        },
    },
});
exports.UserModel = mongoose_1.default.model("User", UserSchema);
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.find(); });
exports.getUsers = getUsers;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.findOne({ email }); });
exports.getUserByEmail = getUserByEmail;
const getUserByEmailSelect = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.UserModel.findOne({ email }).select("+authentication.salt +authentication.password");
});
exports.getUserByEmailSelect = getUserByEmailSelect;
const getUserBySessionToken = (sessionToken) => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.findOne({ "authentication.sessionToken": sessionToken }); });
exports.getUserBySessionToken = getUserBySessionToken;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.findById(id); });
exports.getUserById = getUserById;
const createUser = (values) => __awaiter(void 0, void 0, void 0, function* () { return new exports.UserModel(values).save().then((user) => user.toObject()); });
exports.createUser = createUser;
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.findByIdAndDelete(id); });
exports.deleteUserById = deleteUserById;
const updateUserById = (id, values) => __awaiter(void 0, void 0, void 0, function* () { return exports.UserModel.findByIdAndUpdate(id, values); });
exports.updateUserById = updateUserById;
//# sourceMappingURL=users.js.map