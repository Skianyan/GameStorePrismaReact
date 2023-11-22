import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET(response) {
	try {
		const carts = await prisma.shoppingCart.findMany({
			include: { products: true },
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
