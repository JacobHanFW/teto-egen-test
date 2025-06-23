import { useEffect } from 'react';
import { useLanguage } from '@/hooks/use-language';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}

export function MetaTags({ title, description, ogImage, url }: MetaTagsProps) {
  const { t } = useLanguage();

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) ||
                 document.querySelector(`meta[name="${property}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    if (description) {
      updateMetaTag('description', description);
    }

    // Open Graph tags
    updateMetaTag('og:title', title || t.title);
    updateMetaTag('og:description', description || t.subtitle);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', url || window.location.href);
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage);
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
      updateMetaTag('og:image:type', 'image/png');
    }

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || t.title);
    updateMetaTag('twitter:description', description || t.subtitle);
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

  }, [title, description, ogImage, url, t]);

  return null;
}