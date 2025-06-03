export const getUser = async (param, id) => {
	const response = await fetch(`http://localhost:3000/api/routes/users/${id}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

	const userJson = await response.json();
	const userName = userJson.name;
	return userName;
};
