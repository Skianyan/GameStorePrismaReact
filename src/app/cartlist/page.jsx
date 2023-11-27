import React from "react";
import { prisma } from "@/libs/prisma";
import CartCard from "@/components/CartCard";

const cartlist = async () => {
	const cart = await prisma.shoppingCart.findMany({
		include: { products: true },
	});

	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
		items-center"
		>
			<div className="flex sm:flex-row flex-col justify-center flex-wrap ">
				{cart.map((item) => (
					<CartCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default cartlist;
