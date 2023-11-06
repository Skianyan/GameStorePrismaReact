import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838]  min-h-[72vh]">
			<div className="flex flex-col m-4 space-y-4">
				<Link
					className="bg-slate-400 p-2 rounded-md cursor-pointer text-slate-800 font-semibold w-36"
					href={"/registeruser"}
				>
					Add User
				</Link>
				<Link
					className="bg-slate-400 p-2 rounded-md cursor-pointer text-slate-800 font-semibold w-36"
					href={"/registerproduct"}
				>
					Add Product
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
