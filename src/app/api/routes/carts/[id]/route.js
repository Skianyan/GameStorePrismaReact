import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(response, { params: { id } }) {
	try {
		const carts = await prisma.shoppingCart.findUnique({
			where: { id },
			include: {
				user: true,
				products: true,
			},
		});
		return NextResponse.json(carts);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.stack }, { status: 500 });
	}
}

export async function DELETE(response, { params: { id } }) {
	try {
		const cart = await prisma.shoppingCart.delete({
			where: {
				id,
			},
		});
		return NextResponse.json(cart);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.stack }, { status: 500 });
		}
	}
}
