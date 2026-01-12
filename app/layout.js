import LayoutClient from "../components/More/LayoutClient";
import { Chakra_Petch } from "next/font/google";
import "./globals.scss";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-chakra-petch",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.mkstudio.opole.pl"),
  title: {
    default: "MK Studio Auto Detailing Opole",
    template: "%s | MK Studio Auto Detailing Opole",
  },
  description:
    "MK Studio Auto Detailing: korekta lakieru, folia PPF, powłoki ceramiczne i pranie tapicerki w Opolu.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MK Studio Auto Detailing",
    images: ["/logo-mkstudio-auto-detailing-opole.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={chakraPetch.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
