import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "German Molina Jr. | Creative Developer",
  description:
    "The portfolio of German Molina Jr. — creative developer, explorer, and business owner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}