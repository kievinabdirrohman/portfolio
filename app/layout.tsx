import { Exo_2 } from "next/font/google";

import "./globals.css";


const ubuntu = Exo_2({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kievin Abdirrohman",
  description: "Professional Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <link rel="icon" type="image/x-icon" href="/user-male-svgrepo-com.svg" />
      <body>{children}</body>
    </html>
  );
}
