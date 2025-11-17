// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // On every route (pathname) change, jump to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // keep it snappy so it doesn't fight animations
    });
  }, [pathname]);

  return null;
}
