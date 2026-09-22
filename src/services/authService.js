import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../repositories/userRepository.js";
import generateToken from "../utils/generateToken.js";

export const registerUser = async ({ name, email, password }) => {

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({
    name,
    email,
    password: hashedPassword
  });

  return {
    id: user._id,
    email: user.email
  };
};

export const loginUser = async ({ email, password }) => {

  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid credentials");
  }

  return {
    token: generateToken(user._id)
  };
};