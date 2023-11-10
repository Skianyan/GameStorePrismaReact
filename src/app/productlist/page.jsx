import React from "react";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/libs/prisma";

const productlist = async () => {
	const products = await prisma.product.findMany();
	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
		items-center"
		>
			<div className="flex sm:flex-row flex-col justify-center flex-wrap ">
				{products.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default productlist;
