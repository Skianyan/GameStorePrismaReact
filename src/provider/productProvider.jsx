"use client";
import { createContext, useContext, useState } from "react";

//crear contexto producto
const productContext = createContext();

export function useProductContext() {
	return useContext(productContext);
}

export function ProductContextProvider({ children }) {
	const [product, setProduct] = useState(null);

	return (
		<productContext.Provider value={{ product, setProduct }}>
			{children}
		</productContext.Provider>
	);
}
