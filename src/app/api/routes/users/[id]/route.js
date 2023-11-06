import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
//Endpoint for a single user

//Returns a single user
// http://localhost:3000/api/routes/users/{id}
export async function GET(request, { params: { id } }) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				id: id,
			},
		});
		if (!user) {
			return NextResponse.json({ error: "User Not Found" }, { status: 404 });
		}
		return NextResponse.json(user);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}

export async function DELETE(request, { params: { id } }) {
	try {
		const user = await prisma.user.delete({
			where: {
				id,
			},
		});
		if (!user) {
			return NextResponse.json({ error: "User Not Found" }, { status: 404 });
		}
		return NextResponse.json(user);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}

export async function PUT(request, { params: { id } }) {
	const { username, password, email } = await request.json();

	try {
		const newUser = await prisma.user.update({
			where: {
				id: id,
			},
			data: {
				username: username,
				password: password,
				email: email,
			},
		});
		// if (!user) {
		// 	return NextResponse.json({ error: "User Not Found" }, { status: 404 });
		// }
		return NextResponse.json(newUser);
	} catch (error) {
		if (error instanceof Error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}
	}
}
