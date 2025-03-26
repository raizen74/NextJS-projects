import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

// metadata allow engine crawlers to understand the content of the page
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
