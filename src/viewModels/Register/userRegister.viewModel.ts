import { useState } from "react";

export const userRegisterViewModel = () => {
	const [userData, setUserData] = useState({
		name: "John Doe",
	});

	return {
		userData,
		setUserData,
	};
};
