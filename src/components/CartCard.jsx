"use client";
import React from "react";
import { useState } from "react";
//estado para facilitar navegacion
import { useRouter } from "next/navigation";
//import { useProductContext } from "../provider/productProvider";

const CartCard = ({ item }) => {
	const [cart, setCart] = useState(item);
	const route = useRouter();
	const { id, userId, user, products } = cart;

	const handleOnDeleteItem = async (cartId, itemId) => {
		//API CALL
		const url = `/api/routes/carts/${cartId}/${itemId}`;
		try {
			await fetch(url, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			setCart((prevState) => {
				const newProducts = prevState.products.filter(
					(product) => product.id !== itemId
				);
				return { ...prevState, products: newProducts };
			});
		} catch (error) {
			console.error(error);
		}
		alert(`Deleted product from cart`);
	};

	return (
		<div
			key={cart.id}
			className="items-center p-2 m-4 space-y-3 bg-gray-500 border-4 border-sky-700 rounded-lg min-w-[250px]"
		>
			<div className=" flex-row flex">
				<div>
					<p>Cart ID: {id}</p>
					<p>User ID: {`${user.username}'s cart`}</p>
					<p>Games:</p>
					<ul>
						{products.map((product) => (
							<li
								key={product.id}
								style={{ display: "flex", justifyContent: "space-between" }}
							>
								<i>
									{product.productName} - ${product.price}
								</i>
								<button
									className="btn danger"
									style={{
										backgroundColor: "red",
										border: "1px solid black",
										padding: "1px 5px",
										borderRadius: "5px",
									}}
									title={`remove ${product.productName} from cart`}
									onClick={() => handleOnDeleteItem(id, product.id)}
								>
									X
								</button>
							</li>
						))}
					</ul>
					<a
						onClick={() => {
							//setProduct(item);
							route.push(`http://localhost:3000/cartlist/${id}`);
						}}
					>
						{/* <div className="bg-red-500 rounded-md font-bold text-center w-20 hover:bg-red-700 cursor-pointer">
							Edit
						</div> */}
					</a>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
