import NavBar from "./components/navbar";
import Breadcrumb from "./components/breadcrumb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Breadcrumb />
        {children}
        </body>
    </html>
  );
}
