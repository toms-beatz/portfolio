import type { Metadata } from "next";
import { Exo_2, Raleway } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const exo_2 = Exo_2({
subsets: ['latin'],
display: 'swap',
variable: '--font-exo_2',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  })

export const metadata: Metadata = {
  title: "Thomas Mazeau - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("light", `${exo_2.variable} ${raleway.variable}`)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/lgy5czk.css"></link>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={cn('min-h-screen font-sans antialiased grainy bg-white dark:bg-[#212427]')}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
