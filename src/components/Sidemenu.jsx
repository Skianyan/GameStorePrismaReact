"use client";

import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useState } from "react";

const Sidemenu = () => {
	const [isActive, setIsActive] = useState(false);
	const [isShowing, setIsShowing] = useState(false);
	return (
		<header className="sm:w-[25%]  p-2">
			{/* Responsive Menu */}
			<Popover className="lg:hidden">
				<Popover.Button onClick={() => setIsShowing((isShowing) => !isShowing)}>
					{isActive ? (
						<AiFillCloseCircle
							size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					) : (
						<AiOutlineMenu
							size={30}
							onClick={() => {
								setIsActive(!isActive);
							}}
						/>
					)}
				</Popover.Button>

				<Transition
					show={isShowing}
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Panel className="bg-slate-500 absolute w-[45%] h-full rounded-lg p-2">
						<ul className="text-white space-y-5 ">
							<li className="space-x-2 flex mb-10">
								<div>
									<PersonIcon />
								</div>
								<div>
									<Link href={"/"}>Login / Register</Link>
								</div>
							</li>
							<li className="space-x-2 flex">
								<div>
									<HomeIcon />
								</div>
								<div>
									<Link href={"/productlist"}>Store</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<AssignmentIcon />
								</div>
								<div>
									<Link href={"/userlist"}>Community</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<ShoppingCartIcon />
								</div>
								<div>
									<Link href={"/cartlist"}>Manage Carts</Link>
								</div>
							</li>

							<li className="space-x-2 flex">
								<div>
									<InfoIcon />
								</div>
								<div>
									<Link href={"/"}>About</Link>
								</div>
							</li>
						</ul>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
	);
};

export default Sidemenu;
