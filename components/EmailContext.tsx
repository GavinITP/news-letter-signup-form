"use client";

import { createContext, useState } from "react";

export interface EmailContextProps {
  email: string | null;
  setEmail: (email: React.SetStateAction<string | null>) => void;
}

export const EmailContext = createContext<EmailContextProps | null>(null);

export const EmailContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
