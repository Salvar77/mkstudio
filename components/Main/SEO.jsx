import Head from "next/head";

const SEO = ({ title, description, url, image }) => (
  <Head>
    {/* Podstawowe metadane */}
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Kanoniczny adres – tylko www */}
    <link rel="canonical" href={url} />

    {/* Open Graph (opcjonalnie, ale warto) */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}

    {/* Dopiszesz JSON‑LD lub inne metadane później */}
  </Head>
);

export default SEO;
