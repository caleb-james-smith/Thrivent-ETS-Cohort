"use server";

import { Session, User } from "@/types/types";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.SERVER_BASE_URL;
const USERS_URL = `${API_BASE_URL}/users`;
const SESSIONS_URL = `${API_BASE_URL}/sessions`;

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
