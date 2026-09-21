"use server";

import { Session, User } from "@/types/types";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.SERVER_BASE_URL;
const USERS_URL = `${API_BASE_URL}/users`;
const SESSIONS_URL = `${API_BASE_URL}/sessions`;

export async function authenticateUserLogin(email: string, password: string): Promise<User | null> {
  console.log("Authenticating user log in...");

  const response = await fetch(USERS_URL);

  if (!response.ok) {
    throw new Error("Failed to load user data for authentication.");
  }

  const users: User[] = await response.json();
  const user: User | undefined = users.find(
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

export async function createSession(userId: string): Promise<Session> {
  console.log("Creating session...");

  const session: Session = {
    id: crypto.randomUUID(),
    userId: userId,
  };

  const response = await fetch(SESSIONS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(session),
  });

  if (!response.ok) {
    throw new Error("Failed to create session.");
  }

  const newSession: Session = await response.json();
  const cookieStore = await cookies();

  cookieStore.set("sessionId", newSession.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "lax",
    path: "/",
  })

  return newSession;
}

