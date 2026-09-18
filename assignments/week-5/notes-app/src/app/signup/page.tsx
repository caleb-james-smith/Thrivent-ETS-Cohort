"use client";

import StandardButton from "@/components/StandardButton";
import { createUser } from "@/lib/users";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  async function handleSignUp(event:React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      email: email,
      password: password
    };

    try {
      const user = await createUser(newUser);

      console.log("Created user:", user);

      // Clear form data
      setEmail("");
      setPassword("");

    } catch (error) {
      console.error(error);
    }
  }

  function renderSignUpForm() {
    return (
      <form
        onSubmit={handleSignUp}
        className="flex flex-col justify-center items-start gap-2"
      >
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="border border-gray-200 rounded px-2 py-1"
        ></input>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="border border-gray-200 rounded px-2 py-1"
        ></input>
        <StandardButton text="Sign Up" />
      </form>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 border-2 border-solid border-white w-100 p-5 rounded-2xl">
        <h2 className="font-bold text-4xl">Sign Up</h2>
        <p>Enter your info to sign up.</p>
        {renderSignUpForm()}
      </div>
    </div>
  );
}
