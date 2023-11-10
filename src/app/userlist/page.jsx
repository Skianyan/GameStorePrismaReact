import React from "react";
import UserCard from "@/components/UserCard";
import { prisma } from "@/libs/prisma";

const page = async () => {
	const users = await prisma.user.findMany();
	return (
		<div
			className="flex text-slate-200 bg-gradient-to-br from-[#2A475E] to-[#1B2838] min-h-[72vh] min-w-full justify-center
		items-center"
		>
			<div className="flex sm:flex-row flex-col justify-center flex-wrap ">
				{users.map((item) => (
					<UserCard key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default page;
