import mongoose, { Schema } from "mongoose";

const AttemptSchema = new mongoose.Schema({
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
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const AttemptModel = mongoose.model("Attempt", AttemptSchema);

export const getAll = async () =>
  await AttemptModel.aggregate([
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

export const getByUserId = async (userId: string) => {
  return await AttemptModel.findOne({ userId: userId }).populate(
    "userId",
    "username email"
  );
};

export const addNewAttemptToRaces = async (Attempt: {
  userId: string;
  wpm: number;
  accuracy: number;
}) =>
  await AttemptModel.updateOne(
    { userId: Attempt.userId },
    { $push: { races: Attempt } }
  );

export const createAttempt = async (Attempt: {
  userId: string;
  wpm: number;
  accuracy: number;
}) =>
  await AttemptModel.create({
    userId: Attempt.userId,
    races: [Attempt],
  });
