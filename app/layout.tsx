import "@/styles/global.scss";
import ProximaNova from 'next/font/local'
import NavBar from "./components/navbar";
import Breadcrumb from "./components/breadcrumb";

const proximanova = ProximaNova({
  src: [
    {
      path: './fonts/proximanova-light.woff2',
      weight: '200',
    },
    {
      path: './fonts/proximanova-regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/proximanova-semibold.woff2',
      weight: '700',
    }
  ]
});

export const metadata = {
  title: "Mercado Libre - Test app",
  description: "A sample app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={proximanova.className}>
      <body>
          <NavBar />
          <div className="container">
          <Breadcrumb />
            {children}
          </div>
        </body>
    </html>
  );
}
