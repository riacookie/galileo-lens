import Nav from "./components/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
