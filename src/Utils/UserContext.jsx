import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserProvider;
