import "./globals.css";

export const metadata = {
  title: "Web Traffic Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
