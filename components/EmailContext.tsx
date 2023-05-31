import React, { createContext, useState } from "react";

interface MyContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<MyContextProps | null>(null);

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState("");

  return (
    <MyContext.Provider value={{ email, setEmail }}>
      {children}
    </MyContext.Provider>
  );
};
