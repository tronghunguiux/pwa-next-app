import Head from "next/head";

interface HeadMetaProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    canonical?: string;
    linkcss?: string[];
}

const HeadMeta: React.FC<HeadMetaProps> = ({
    title = "My Next.js App",
    description = "This is a Next.js application",
    keywords = "nextjs, react, typescript",
    image = "/default-og-image.png",
    url = "https://my-next-app.com",
    canonical,
    linkcss = [],
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

            {/* Apple */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={title} />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            
            {/* Canonical URL */}
            {canonical ? <link rel="canonical" href={canonical} /> : <link rel="canonical" href={url} />}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />

            {/* {Children} */}
            {/* { linkcss && <link rel="stylesheet" href={linkcss} /> } */}
            {/* Import nhiều file CSS */}
            {linkcss.length > 0 &&
                linkcss.map((href, index) => (
                    <link key={index} rel="stylesheet" href={href} />
                ))
            }
        </Head>
    );
};

export default HeadMeta;
