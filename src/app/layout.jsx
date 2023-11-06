import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserContextProvider } from "@/provider/userProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Stem: By notVolv",
	description: "App to test relational databases with prisma",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<UserContextProvider>{children}</UserContextProvider>
				<Footer />
			</body>
		</html>
	);
}
