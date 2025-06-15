import Nav from "./components/Nav";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<Nav />
			<body>{children}</body>
		</html>
	);
}
