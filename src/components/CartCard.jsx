"use client";
import React from "react";

//estado para facilitar navegacion
import { useRouter } from "next/navigation";
//import { useProductContext } from "../provider/productProvider";

const CartCard = ({ item }) => {
	//se crea instancia para navegar
	const route = useRouter();
	//const { setProduct } = useProductContext();
	const { products } = item;

	const productNames = products.map((product) => product.productName);

	console.log(productNames);
	return (
		<div
			key={item.id}
			className="items-center p-2 m-4 space-y-3 bg-gray-500 border-4 border-sky-700 rounded-lg min-w-[250px]"
		>
			<div className=" flex-row flex">
				<div>
					<p>Cart ID: {item.id}</p>
					<p>User ID: {item.userId}</p>
					<p className="mr-4">{productNames.map((product) => [product])}</p>
					<a
						onClick={() => {
							//setProduct(item);
							route.push(`http://localhost:3000/cartlist/${item.id}`);
						}}
					>
						<div className="bg-red-500 rounded-md font-bold text-center w-20 hover:bg-red-700 cursor-pointer">
							Edit
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
