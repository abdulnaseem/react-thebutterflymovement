// src/hooks/useNavigationItems.js
import { useEffect, useState } from "react";

/**
 * Default static navigation used as a fallback.
 * Shape matches what a Node.js API could return.
 */
const NAV_ITEMS_DEFAULT = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "founder", label: "Founder", to: "/founder" },
  {
    id: "clubs",
    label: "Clubs",
    children: [
      { id: "brawlers", label: "Brawlers Boxing", to: "/brawlers-boxing" },
      { id: "grapple", label: "The Grapple Hub", to: "/the-grapple-hub" },
    ],
  },
  { id: "contact", label: "Contact", to: "/contact" },
];

/**
 * Hook to fetch nav items from backend.
 * - Uses static defaults as a fallback.
 * - Can be wired to your Node.js /api/navigation endpoint.
 */
export const useNavigationItems = () => {
  const [items, setItems] = useState(NAV_ITEMS_DEFAULT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchNav = async () => {
      try {
        setLoading(true);
        // Replace with your actual Node.js route
        const res = await fetch("/api/navigation");
        if (!res.ok) throw new Error("Failed to fetch navigation");

        const data = await res.json();
        if (!cancelled && Array.isArray(data) && data.length) {
          setItems(data);
        }
      } catch (err) {
        if (!cancelled) {
          console.error("Navigation fetch error:", err);
          setError(err);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    // Uncomment when API is ready
    // fetchNav();

    return () => {
      cancelled = true;
    };
  }, []);

  return { items, loading, error };
};