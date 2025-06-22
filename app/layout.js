import "@/app/globals.scss";
import LayoutClient from "@/components/More/LayoutClient";

export const metadata = {
  title: "MKStudio Detailing",
  description: "Profesjonalne studio autodetailingu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
