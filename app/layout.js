import "./globals.scss";
import LayoutClient from "../components/More/LayoutClient";
import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-chakra-petch",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          />
        </noscript>
      </head>

      <body className={chakraPetch.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
