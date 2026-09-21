export interface StandardButtonProps {
  text: string;
}

export interface StandardLinkProps {
  href: string;
  text: string;
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Session {
  id: string;
  userId: string;
}
