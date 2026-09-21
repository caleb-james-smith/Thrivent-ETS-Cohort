"use server";

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

export async function authenticateUserLogin(email: string, password: string): Promise<User | null> {
  console.log("Authenticating user log in...");

  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error("Failed to load user data for authentication.");
  }

  const data: User[] = await response.json();
  
  const user: User | undefined = data.find(
    (u: User) => u.email === email
  );

  if (user && user.password === password) {
    console.log("User log in passed authentication.");
    return user;
  } else {
    console.log("User log in failed authentication. Did not find this email/password combination.");
    return null;
  }
}
