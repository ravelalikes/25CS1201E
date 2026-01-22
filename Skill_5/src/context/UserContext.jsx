import { createContext, useState } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [status, setStatus] = useState("Active");
  return (
    <UserContext.Provider value={{ status, setStatus }}>
      {children}
    </UserContext.Provider>
  );
}
