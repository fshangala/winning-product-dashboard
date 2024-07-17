import { createContext, useState } from "react";

export const UserContext = createContext(null)
export const SetUserContext = createContext(null)

export default function UserProvider({children}) {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("auth")))

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  )
}