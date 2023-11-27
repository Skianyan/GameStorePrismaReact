"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useShopContext } from "../provider/shopProvider";
const ProductForm = () => {
	const [productName, setProductName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	const [error, setError] = useState(false);

	const { product, setProduct } = useShopContext();
	const router = useRouter();

	useEffect(() => {
		if (product !== null) {
			setProductName(product.productName);
			setDescription(product.description);
			setPrice(product.price);
		}
	}, [product]);

	const submitData = async (e) => {
		e.preventDefault();

		if ([productName, description, price].includes("")) {
			setError(true);
			return;
		}
		setError(false);
		// este objeto se crea si el usuario está null
		const newProduct = {
			productName,
			description,
			price,
		};

		if (product === null) {
			try {
				const body = { productName, description, price };
				await fetch(`/api/routes/products`, {
					cache: "no-store",
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				setProduct(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		} else if (product !== null) {
			try {
				const body = { productName, description, price };
				await fetch(`/api/routes/products/${product.id}`, {
					cache: "no-store",
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				setProduct(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		}
	};

	const delet = async () => {
		const { id } = product;
		await fetch(`/api/routes/products/${id}`, {
			cache: "no-store",
			method: "DELETE",
		});
		router.push("/");
	};

	const clear = () => {
		setProductName("");
		setDescription("");
		setBanda("");
	};
	return (
		<>
			<form className="bg-[#2A475E] space-y-2 border-4 border-indigo-600 p-4 rounded-md">
				{error && (
					<div className="bg-red-500 rounded-md font-bold text-center">
						{" "}
						Error: All text fields must contain valid information
					</div>
				)}
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="productName"
						className="font font-semibold uppercase text-white"
					>
						productName
					</label>
					<input
						type="text"
						id="productName"
						className="p-2 rounded-md text-slate-600"
						placeholder="productName"
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="description"
						className="font font-semibold uppercase text-white"
					>
						description
					</label>
					<input
						type="text"
						id="description"
						className="p-2 rounded-md text-slate-600"
						placeholder="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="price"
						className="font font-semibold uppercase text-white"
					>
						price
					</label>
					<input
						type="text"
						id="price"
						className="p-2 rounded-md text-slate-600"
						placeholder="price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div>
					<button
						className="bg-[#1b2444] rounded-md p-3 mt-4 text-white"
						onClick={submitData}
					>
						{!product ? "Register product" : "Edit product"}
					</button>
				</div>
				<div className="flex w-full justify-end space-x-4">
					<div className="flex justify-end">
						<input
							type="button"
							value={"Delete"}
							className="bg-red-500 hover:bg-red-700 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
							onClick={delet}
						/>
					</div>
					<input
						type="button"
						value={"Clear"}
						className="bg-emerald-300 hover:bg-emerald-500 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
						onClick={clear}
					/>
				</div>
			</form>
		</>
	);
};

export default ProductForm;
