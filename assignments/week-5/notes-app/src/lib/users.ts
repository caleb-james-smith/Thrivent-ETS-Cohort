"use server";

import { Session, User } from "@/types/types";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.SERVER_BASE_URL;
const USERS_URL = `${API_BASE_URL}/users`;
const SESSIONS_URL = `${API_BASE_URL}/sessions`;

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

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const sessionId: string | undefined = cookieStore.get("sessionId")?.value;

  if (!sessionId) {
    console.log("Unable to load current user.");
    return null;
  }
  
  const responseSessions = await fetch(SESSIONS_URL);
  
  if (!responseSessions.ok) {
    throw new Error("Failed to load sessions.");
  }
  
  const sessions: Session[] = await responseSessions.json();
  
  // Find session based on session id
  const session: Session | undefined = sessions.find(
    (s: Session) => s.id === sessionId,
  );

  if (session) {
    const responseUsers = await fetch(USERS_URL);
    
    if (!responseUsers.ok) {
      throw new Error("Failed to load users.");
    }
    
    const users: User[] = await responseUsers.json();
    
    // Find user based on user id
    const user: User | undefined = users.find((u: User) => u.id === session.userId);
    
    if (user) {
      console.log("Found user based on id.");
      return user;
    } else {
      console.log("Did not find user based on id.");
      return null;
    }
  } else {
    console.log("Failed to load session.");
    return null;
  }
}

