import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  attemptId: {
    type: Schema.Types.ObjectId,
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

export const UserModel = mongoose.model("User", UserSchema);

export const getUsers = async () => UserModel.find();
export const getUserByEmail = async (email: string) =>
  UserModel.findOne({ email });
export const getUserByEmailSelect = async (email: string) =>
  UserModel.findOne({ email }).select(
    "+authentication.salt +authentication.password"
  );
export const getUserBySessionToken = async (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });
export const getUserById = async (id: string) => UserModel.findById(id);
export const createUser = async (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = async (id: string) =>
  UserModel.findByIdAndDelete(id);
export const updateUserById = async (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);
