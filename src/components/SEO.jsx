import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, schema, noindex }) {
    const fullTitle = `${title} | אביהו סיטון - פסיכותרפיסט`;
    const siteUrl = "https://avihusitton.com";
    
    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${siteUrl}${canonical}`} />
            
            {noindex && <meta name="robots" content="noindex, follow" />}
            
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${siteUrl}${canonical}`} />
            
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
