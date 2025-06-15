import Nav from "./components/Nav";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	);
}
