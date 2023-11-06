"use client";
import { createContext, useContext, useState } from "react";

//crear contexto
const userContext = createContext();

export function useUserContext() {
	return useContext(userContext);
}

export function UserContextProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<userContext.Provider value={{ user, setUser }}>
			{children}
		</userContext.Provider>
	);
}
