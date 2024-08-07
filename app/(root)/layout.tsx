export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="text-white-1">Left Sidebar</p>
      <main>{children}</main>
      <p className="text-white-1">Right Sidebar</p>
    </div>
  );
}
