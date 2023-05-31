import { createContext, useState } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [email, setEmail] = useState("");

  return (
    <MyContext.Provider value={{ email, setEmail }}>
      {children}
    </MyContext.Provider>
  );
};
