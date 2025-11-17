// src/components/SEO.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SEO({ title, description, path }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | Fruitpod` : "Fruitpod";
    document.title = fullTitle;

    // Update meta description
    const metaDesc =
      description ||
      "Fruitpod – fresh fruit bowls, parfaits, juices and smoothies.";
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = metaDesc;

    // Basic Open Graph tags
    const url = window.location.origin + (path || location.pathname);
    setOgTag("og:title", fullTitle);
    setOgTag("og:description", metaDesc);
    setOgTag("og:url", url);
    setOgTag("og:type", "website");
  }, [title, description, path, location.pathname]);

  return null;
}

function setOgTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default SEO;
