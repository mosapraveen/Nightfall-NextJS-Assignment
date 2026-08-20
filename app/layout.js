import "./globals.css";

export const metadata = {
  title: "Red Bull Nightfall — Energy for the opposite of busy",
  description: "A conceptual Red Bull reimagining as a premium nighttime tea brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}