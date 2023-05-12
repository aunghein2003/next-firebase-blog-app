export const metadata = {
  title: "My Bloggy | Blog Detail",
  description: "blog app with category by next js and firebase",
  openGraph: {
    type: "website",
    title: "My Bloggy | Blog Detail",
    description: "blog app with category by next js and firebase",
    siteName: "My Bloggy | Blog Detail",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
