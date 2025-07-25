import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { GET as getById } from "./[id]/route";

export async function GET(response) {
	try {
		let carts = await prisma.shoppingCart.findMany({
			include: {
				products: true,
				user: true,
			},
		});
		carts = carts.map((cart) => {
			//remove cart.user.password
			delete cart.user.password;
			return cart;
		});
		return NextResponse.json(carts);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.stack }, { status: 500 });
	}
}

export async function POST(response) {
	try {
		const { userId } = await response.json();
		const newCart = await prisma.shoppingCart.create({
			data: {
				user: {
					connect: {
						id: userId,
					},
				},
			},
		});

		return NextResponse.json(newCart);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.stack }, { status: 500 });
	}
}
