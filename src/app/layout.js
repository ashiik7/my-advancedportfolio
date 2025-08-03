import "./globals.css";

export const metadata = {
  title: "Ashik | Developer",
  description: "Ashik Kishor's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        {children}
      </body>
    </html>
  );
}

