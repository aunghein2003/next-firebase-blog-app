import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Bloggy",
  description: "blog app with category by next js and firebase",
  keywords: ["nextjs", "firebase", "blog", "my bloggy"],
  icons: "/blogging.png",
  openGraph: {
    type: "website",
    title: "My Bloggy",
    description: "blog app with category by next js and firebase",
    siteName: "My Bloggy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
