"use server";
import { CreateUserParams } from "@/types";
import { handleError } from "@/lib/utils";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.created(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};
