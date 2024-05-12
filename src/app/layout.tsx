import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import "../../public/assets/libraries/css/main.css";
import "../../public/assets/libraries/css/home.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naufal Fadhil",
  description: "Naufal Fadhil's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous" />
          <link rel="icon" href="assets/images/logo/N22-Logo-Red.svg" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </head>

        <body className={inter.className}>

        {children}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous" defer></script>
        <script src="../../public/assets/libraries/js/main.js" defer></script>
        
        </body>
      </html>
    </>
  );
}
