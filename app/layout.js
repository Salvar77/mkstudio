import "./globals.scss";
import LayoutClient from "../components/More/LayoutClient";

export const metadata = {
  metadataBase: new URL("https://www.mkstudio.opole.pl"),

  title: {
    default: "MK Studio Auto Detailing Opole",
    template: "%s | MK Studio Auto Detailing Opole",
  },

  description:
    "MK Studio Auto Detailing: korekta lakieru, folia PPF, powłoki ceramiczne i pranie tapicerki w Opolu.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "MK Studio Auto Detailing",
    images: ["/logo-mkstudio-auto-detailing-opole.jpg"],
  },
  icons: [
    {
      rel: "stylesheet",
      url: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
    },
  ],
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
