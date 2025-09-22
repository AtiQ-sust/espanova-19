import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  siteName?: string;
  locale?: string;
}

const SEO = ({
  title,
  description = 'Espanova - Your trusted partner for overseas employment, Hajj & Umrah, tourism, and comprehensive travel services.',
  keywords = 'overseas jobs, manpower export, hajj umrah, saudi tourism, travel services, bangladesh recruitment',
  image = '/og-image.jpg',
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  siteName = 'Espanova',
  locale = 'en_US',
}: SEOProps) => {
  const fullTitle = title === 'Espanova' ? title : `${title} | Espanova`;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Espanova',
          url: 'https://espanova.com',
          logo: 'https://espanova.com/logo.jpg',
          description: description,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+880-1234-567890',
            contactType: 'customer service',
            availableLanguage: ['English', 'Bengali'],
          },
          sameAs: [
            'https://facebook.com/espanova',
            'https://twitter.com/espanova',
            'https://linkedin.com/company/espanova',
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;