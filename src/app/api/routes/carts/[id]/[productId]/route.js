import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function DELETE(request, { params: { id, productId } }) {
	try {
		const cart = await prisma.shoppingCart.update({
			where: { id },
			include: { products: true },
			data: {
				products: {
					disconnect: { id: productId },
				},
			},
		});
		return NextResponse.json(cart);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.stack }, { status: 500 });
		}
	}
}
