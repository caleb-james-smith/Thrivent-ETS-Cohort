import { useState } from "react";
import type { HeaderProps } from "../types/props";

export function Header({ title, text }: HeaderProps) {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
      </form>
    </div>
  );
}
