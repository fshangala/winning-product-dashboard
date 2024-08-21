import { createContext, useReducer, useState } from "react";

export const UserContext = createContext(null)
export const UserDispatchContext = createContext(null)

function userReducer(state,action) {
  switch (action.type) {
    case "set-auth":
      return {
        ...state,
        auth:action.auth,
      }
    
    case "set-profile":
      return {
        ...state,
        profile:action.profile,
      }
  
    default:
      break;
  }
}

export default function UserProvider({children}) {
  const [userState,dispatch] = useReducer(userReducer,{
    auth:JSON.parse(localStorage.getItem("auth")),
    profile:null,
  })

  return (
    <UserContext.Provider value={userState}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}