import React from "react";

import { prisma } from "@/libs/prisma";
import Formulario from "@/components/Formulario";

const userlist = async ({ params }) => {
	const id = Array.isArray(params?.id) ? params?.id[0] : params?.id;
	const user = await prisma.user.findUnique({
		where: { id },
	});

	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
    items-center"
		>
			<div className="m-4 w-[95%] sm:w-[90%] max-w-[900px]">
				<Formulario user={user} />
			</div>
		</div>
	);
};

export default userlist;
