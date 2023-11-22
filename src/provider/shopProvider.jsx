"use client";
import { createContext, useContext, useState } from "react";

//crear contexto de la tienda
const shopContext = createContext();

export function useShopContext() {
	return useContext(shopContext);
}

export function ShopContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [product, setProduct] = useState(null);
	const [shoppingCart, setShoppingCart] = useState(null);

	return (
		<shopContext.Provider
			value={{
				user,
				setUser,
				product,
				setProduct,
				shoppingCart,
				setShoppingCart,
			}}
		>
			{children}
		</shopContext.Provider>
	);
}
