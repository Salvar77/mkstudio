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
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        as="style"
      />
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

      <link
        rel="preload"
        href="/fonts/ChakraPetch-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/ChakraPetch-Light.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/ChakraPetch-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
