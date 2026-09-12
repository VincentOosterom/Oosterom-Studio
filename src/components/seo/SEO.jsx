const SITE = "https://www.oosteromstudio.nl";
const OG_IMAGE = `${SITE}/og-image.jpg`;

export default function SEO({
                                title,
                                rawTitle = false,        // ← nieuw: titel exact gebruiken, geen suffix
                                description,
                                ogDescription,
                                path = "",
                                image = OG_IMAGE,
                                ogType = "website",
                                noindex = false,
                                schema,
                            }) {
    const fullTitle = rawTitle ? title : `${title} | Oosterom Studio`;
    const url = `${SITE}${path}`;
    const socialDesc = ogDescription ?? description;

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={socialDesc} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Oosterom Studio" />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={image} />

            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}
        </>
    );
}