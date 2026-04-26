import Head from 'next/head';

export default function SEO({ title, description, canonical, schema, noindex }) {
    const siteUrl = "https://avihusitton.com";
    
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${siteUrl}${canonical}`} />
            
            {noindex && <meta name="robots" content="noindex, follow" />}
            
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${siteUrl}${canonical}`} />
            
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Head>
    );
}
