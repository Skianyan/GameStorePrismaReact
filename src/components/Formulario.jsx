"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useShopContext } from "../provider/shopProvider";
import { addUser } from "@/libs/addUser";
const Formulario = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const [error, setError] = useState(false);

	const { user, setUser, shoppingCart, setShoppingCart } = useShopContext();
	const router = useRouter();
	//console.log(user);
	useEffect(() => {
		if (user !== null) {
			setUsername(user.username);
			setPassword(user.password);
			setEmail(user.email);
		}
	}, [user]);

	const submitData = async (e) => {
		e.preventDefault();

		if ([username, password, email].includes("")) {
			setError(true);
			return;
		}
		setError(false);
		// este objeto se crea si el usuario está null
		const newUser = {
			username,
			password,
			email,
		};

		if (user === null) {
			try {
				const userId = await addUser(newUser);
				const newShoppingCart = {
					userId,
				};
				await fetch(`/api/routes/carts`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newShoppingCart),
				});
				setUser(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		} else if (user !== null) {
			try {
				const body = { username, password, email };

				await fetch(`/api/routes/users/${user.id}`, {
					cache: "no-store",
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body),
				});
				setUser(null);
				router.push("/");
			} catch (error) {
				console.error(error);
			}
		}
	};

	const delet = async () => {
		const { id } = user;
		await fetch(`/api/routes/users/${id}`, {
			cache: "no-store",
			method: "DELETE",
		});

		router.push("/");
	};

	const clear = () => {
		setUsername("");
		setPassword("");
		setBanda("");
	};
	return (
		<>
			<form className="bg-[#2A475E] space-y-2 border-4 border-indigo-600 p-4 rounded-md">
				{error && (
					<div className="bg-red-500 rounded-md font-bold text-center ">
						{" "}
						Error: All text fields must contain valid information
					</div>
				)}
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="username"
						className="font font-semibold uppercase text-white"
					>
						Username
					</label>
					<input
						type="text"
						id="username"
						className="p-2 rounded-md text-slate-600"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="password"
						className="font font-semibold uppercase text-white"
					>
						Password
					</label>
					<input
						type="text"
						id="password"
						className="p-2 rounded-md text-slate-600"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label
						htmlFor="email"
						className="font font-semibold uppercase text-white"
					>
						Email
					</label>
					<input
						type="text"
						id="email"
						className="p-2 rounded-md text-slate-600"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<button
						className="bg-[#1b2444] rounded-md p-3 mt-4 text-white"
						onClick={submitData}
					>
						{!user ? "Register user" : "Edit user"}
					</button>
				</div>
				<div className="flex w-full justify-end space-x-4">
					<div className="flex justify-end">
						<input
							type="button"
							value={"Delete"}
							className="bg-red-500 hover:bg-red-700 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
							onClick={delet}
						/>
					</div>
					<input
						type="button"
						value={"Clear"}
						className="bg-emerald-300 hover:bg-emerald-500 p-2 rounded-md 
                        cursor-pointer text-slate-800 font-semibold"
						onClick={clear}
					/>
				</div>
			</form>
		</>
	);
};

export default Formulario;
