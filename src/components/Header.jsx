import React from "react";
import Image from "next/image";
import Sidemenu from "./Sidemenu";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex p-3 bg-[#171a21] items-center lg:justify-evenly text-white h-28">
			<div className="lg:hidden flex self-center">
				<Sidemenu></Sidemenu>
			</div>

			<div className="flex space-x-48 lg:items-center justify-self-center ">
				<a href="./">
					<Image
						src={"/stem-header.png"}
						width={600}
						height={250}
						alt="logo"
						style={{ width: 168, height: 70 }}
						priority
					/>
				</a>
				<div className="hidden lg:flex space-x-10 self-center font-mono font-extrabold text-xl">
					<ul>
						<Link href={"/productlist"}>Store</Link>
					</ul>
					<ul>
						<Link href={"/userlist"}>Community</Link>
					</ul>
					<ul>About</ul>
				</div>
				<div className="hidden lg:block self-start">Register/Login</div>
			</div>
		</header>
	);
};

export default Header;
