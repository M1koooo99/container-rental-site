import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function useSeo({ title, description, ogTitle, ogDescription }: SeoProps) {
  useEffect(() => {
    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
    
    // Set OG Title
    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute("content", ogTitle || title);
    
    // Set OG Description
    let metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOgDescription) {
      metaOgDescription = document.createElement("meta");
      metaOgDescription.setAttribute("property", "og:description");
      document.head.appendChild(metaOgDescription);
    }
    metaOgDescription.setAttribute("content", ogDescription || description);
    
  }, [title, description, ogTitle, ogDescription]);
}
