import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
//Endpoint for a single product

//Returns a single product
// http://localhost:3000/api/routes/products/{id}
export async function GET(request, { params: { id } }) {
	try {
		const product = await prisma.product.findFirst({
			where: {
				id: id,
			},
		});
		if (!product) {
			return NextResponse.json({ error: "Product Not Found" }, { status: 404 });
		}
		return NextResponse.json(product);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}

export async function DELETE(request, { params: { id } }) {
	try {
		const product = await prisma.product.delete({
			where: {
				id,
			},
		});
		if (!product) {
			return NextResponse.json({ error: "product Not Found" }, { status: 404 });
		}
		return NextResponse.json(product);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}

export async function PUT(request, { params: { id } }) {
	const { productName, description, price } = await request.json();

	try {
		const newProduct = await prisma.product.update({
			where: {
				id: id,
			},
			data: {
				productName,
				description,
				price,
			},
		});
		// if (!product) {
		// 	return NextResponse.json({ error: "User Not Found" }, { status: 404 });
		// }
		return NextResponse.json(newProduct);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}
