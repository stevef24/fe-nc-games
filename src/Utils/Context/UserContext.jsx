import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState("grumpy19");
	return (
		<UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};
