import Formulario from "@/components/Formulario";
import React from "react";

const registeruser = () => {
	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
		items-center"
		>
			<div className="w-[80vh]">
				<Formulario />
			</div>
		</div>
	);
};

export default registeruser;
