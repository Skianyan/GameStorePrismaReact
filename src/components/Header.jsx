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
				<div className="hidden lg:flex self-center font-mono font-extrabold text-xl ">
					<ul className="flex gap- !no-underline gap-4 !text-white [&>li]:ms-5">
						<li>
							<Link
								href={"/productlist"}
								className="!no-underline !text-gray-400 !hover:text-white"
							>
								STORE
							</Link>
						</li>
						<li>
							<Link
								href={"/userlist"}
								className="!no-underline !text-gray-400 hover:text-cyan-500"
							>
								COMMUNITY
							</Link>
						</li>
						<li>
							<Link
								href={"/cartlist"}
								className="!no-underline !text-gray-400 hover:text-cyan-500"
							>
								CARTS
							</Link>
						</li>
						<li>
							<Link
								href={"/aboutme"}
								className="!no-underline !text-gray-400 hover:text-cyan-500"
							>
								ABOUT
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden lg:block self-start bg-slate-700 pa">Register/Login</div>
			</div>
		</header>
	);
};

export default Header;
