import "@/app/ui/global.css";
import { inter, lusitana } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.variable} ${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
