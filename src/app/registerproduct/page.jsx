import ProductForm from "@/components/ProductForm";
import React from "react";

const registerproduct = () => {
	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
		items-center"
		>
			<div className="w-[80vh]">
				<ProductForm />
			</div>
		</div>
	);
};

export default registerproduct;
