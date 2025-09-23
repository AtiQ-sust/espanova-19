import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonical?: string;
}

const SEO = ({
  title = 'Espanova - Global Opportunities in Manpower & Tourism',
  description = 'Government-approved overseas manpower recruiting and Hajj/Umrah tourism agency. Find international jobs, book religious tours, and explore travel packages with Espanova.',
  keywords = 'overseas jobs, manpower export, hajj umrah, saudi tourism, visa ticketing, international recruitment, travel agency, bangladesh',
  image = '/images/og-image.jpg',
  url,
  type = 'website',
  siteName = 'Espanova',
  author = 'Espanova Team',
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonical,
}: SEOProps) => {
  const siteUrl = 'https://espanova.com'; // Replace with actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image?.startsWith('http') ? image : `${siteUrl}${image}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#5B2C98" />
      <meta name="msapplication-TileColor" content="#5B2C98" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteName,
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/images/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+8801521217439",
            "contactType": "customer service",
            "availableLanguage": ["English", "Bengali"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BD",
            "addressLocality": "Dhaka"
          },
          "sameAs": [
            "https://facebook.com/espanova",
            "https://linkedin.com/company/espanova",
            "https://instagram.com/espanova"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;