"use client";

import { createContext, useState } from "react";

export interface EmailContextProps {
  email: string;
  setEmail: (email: React.SetStateAction<string>) => void;
}

export const EmailContext = createContext<EmailContextProps | null>(null);

export const EmailContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
