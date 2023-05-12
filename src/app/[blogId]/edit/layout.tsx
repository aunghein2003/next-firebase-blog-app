export const metadata = {
  title: "My Bloggy | Edit",
  description: "blog app with category by next js and firebase",
  openGraph: {
    type: "website",
    title: "My Bloggy | Edit",
    description: "blog app with category by next js and firebase",
    siteName: "My Bloggy | Edit",
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
