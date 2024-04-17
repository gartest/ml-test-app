import "@/styles/global.scss";
import ProximaNova from 'next/font/local'
import NavBar from "./components/navbar";

const proximanova = ProximaNova({
  src: [
    {
      path: './fonts/proximanova-light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/proximanova-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/proximanova-semibold.woff2',
      weight: '700',
      style: 'normal',
    }
  ]
});

export const metadata = {
  title: "Mercado Libre - Test app",
  description: "Meta description for SEO",
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
            {children}
          </div>
        </body>
    </html>
  );
}
