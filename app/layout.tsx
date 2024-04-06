import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from 'next/font/google'
import InstallBootstrap from "@/components/InstallBootstrap";
import StyledComponentsRegistry from '../lib/registry'


 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "The Best Web Development Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <InstallBootstrap/>
      <body className={roboto.className}>
      <StyledComponentsRegistry>

    {children}
    </StyledComponentsRegistry>

</body>
    </html>
  );
}