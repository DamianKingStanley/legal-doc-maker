import jwt from "jsonwebtoken";
import User, { IUser } from "../../src/models/User";

export const createToken = (userId: string): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "7d" });
};

export const getUserFromToken = async (
  token: string
): Promise<IUser | null> => {
  if (!token) return null;
  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const user = await User.findById(userId);
    return user;
  } catch {
    return null;
  }
};
