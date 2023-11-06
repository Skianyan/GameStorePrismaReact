import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async function GET(response) {
	try {
		const products = await prisma.product.findMany();
		return NextResponse.json(products);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.stack }, { status: 500 });
	}
}

export async function POST(response) {
	try {
		const { productName, description, price } = await response.json();
		const newProduct = await prisma.product.create({
			data: {
				productName,
				description,
				price,
			},
		});

		return NextResponse.json(newProduct);
	} catch (error) {
		if (error instanceof Error)
			return NextResponse.json({ error: error.stack }, { status: 500 });
	}
}
