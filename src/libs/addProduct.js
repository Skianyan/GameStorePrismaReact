export const addProduct = async (product) => {
	const response = await fetch("http://localhost:3000/api/routes/users/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(product),
	});

	const productJson = await response.json();
	const productId = productJson.id;
	return productId;
};
