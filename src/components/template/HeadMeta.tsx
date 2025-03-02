import Head from "next/head";

interface HeadMetaProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    canonical?: string;
}

const HeadMeta: React.FC<HeadMetaProps> = ({
    title = "My Next.js App",
    description = "This is a Next.js application",
    keywords = "nextjs, react, typescript",
    image = "/default-og-image.png",
    url = "https://my-next-app.com",
    canonical,
}) => {
    return (
        <Head>
            {/* Meta Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Information page */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph Meta */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Meta */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Canonical URL */}
            {canonical ? <link rel="canonical" href={canonical} /> : <link rel="canonical" href={url} />}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default HeadMeta;
