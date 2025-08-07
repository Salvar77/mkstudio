import BlogComponent from "../../components/Main/Blog";
import classes from "./page.module.scss";

export const metadata = {
  title: "Blog | MK Studio Auto Detailing  Opole",
  description:
    "Porady z zakresu auto detailingu, studium przypadków i realizacje MK Studio w Opolu. Dowiedz się, jak dbać o lakier, tapicerkę i folię PPF.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | MK Studio Auto Detailing  Opole",
    description:
      "Sprawdzone techniki detailingu, recenzje produktów i efekty naszych realizacji – wszystko w jednym miejscu.",
    images: [
      {
        url: "/og/logo-mkstudio-auto-detailing-opole.jpg",
        width: 1200,
        height: 630,
        alt: "Nagłówek bloga MK Studio Auto Detailing - Pranie tapicerki - Korekta lakieru Opole",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <main className={classes.blog}>
      <h1>Blog</h1>
      <BlogComponent />
    </main>
  );
}
