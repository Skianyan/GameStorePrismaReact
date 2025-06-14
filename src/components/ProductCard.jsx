"use client";
import React from "react";

//estado para facilitar navegacion
import { useRouter } from "next/navigation";
import { useShopContext } from "../provider/shopProvider";
import AddCartModal from "./AddCartModal";

const ProductCard = ({ item }) => {
	//se crea instancia para navegar
	const route = useRouter();
	const { setProduct } = useShopContext();

	return (
		<div
			key={item.id}
			className="items-center p-2 m-4 space-y-3 bg-gray-500 border-4 border-sky-700 rounded-lg min-w-[250px]"
		>
			<div className=" flex-row flex">
				<div>
					<p>Product Name: {item.productName}</p>
					<p>Product Description: {item.description}</p>
					<div className="flex flex-row justify-between mt-3">
						<button
							className="bg-red-500 rounded-md font-bold text-center w-22 hover:bg-red-700 cursor-pointer p-3"
							onClick={() => {
								setProduct(item);
								route.push(`http://localhost:3000/productlist/${item.id}`);
							}}
						>
							Edit
						</button>
						<AddCartModal item={item} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
