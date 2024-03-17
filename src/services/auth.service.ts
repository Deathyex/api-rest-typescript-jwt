import jwt from "jsonwebtoken";
import { User } from "../models/user.interface";

const JWT_SECRET = process.env.JWT_SECRET || "default-secret";

export const generateToken = (user: User): string => {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
};
