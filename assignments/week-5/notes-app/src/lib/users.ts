import { User } from "@/types/types";

const API_BASE_URL = process.env.SERVER_BASE_URL;
const USERS_URL = `${API_BASE_URL}/users`;

console.log("process.env.SERVER_BASE_URL:", process.env.SERVER_BASE_URL);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("USERS_URL:", USERS_URL);

export async function createUser(user: User): Promise<User> {
  console.log("Creating a new user...");
  console.log("USERS_URL:", USERS_URL);

  const response = await fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user.");
  }

  return response.json();
}
