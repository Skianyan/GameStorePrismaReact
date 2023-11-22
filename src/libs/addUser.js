export const addUser = async (user) => {
	const response = await fetch("http://localhost:3000/api/routes/users/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user),
	});

	const userJson = await response.json();
	const userId = userJson.id;
	return userId;
};
