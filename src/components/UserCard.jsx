"use client";
import React from "react";

//estado para facilitar navegacion
import { useRouter } from "next/navigation";
import { useShopContext } from "../provider/shopProvider";

const UserCard = ({ item }) => {
	//se crea instancia para navegar
	const route = useRouter();
	const { setUser } = useShopContext();
	return (
		<div
			key={item.id}
			className="items-center p-2 m-4 space-y-3 bg-gray-500 border-4 border-sky-700 rounded-lg min-w-[250px]"
		>
			<div className=" flex-row flex">
				<div>
					<p>
						{item.username}, {item.email}
					</p>
					<a
						onClick={() => {
							setUser(item);
							route.push(`http://localhost:3000/userlist/${item.id}`);
						}}
					>
						<div className="bg-red-500 rounded-md font-bold text-center hover:bg-red-700 cursor-pointer w-20">
							Edit
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
