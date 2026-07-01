// src/components/navigation/Navigation.jsx
import { useEffect, useCallback, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import LogoImage from "../../assets/images/logo.png";

const SIGNUP_URL = "https://signup.thebutterflymovement.health/signup";

const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "story", label: "Our Story", to: "/about" },
  { id: "brawlers", label: "Brawlers Boxing", to: "/brawlers-boxing" },
  { id: "founder", label: "Founder", to: "/founder" },
  { id: "contact", label: "Contact", to: "/contact" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const desktopTransparent = isHome && !hasScrolled && !mobileOpen;

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        bg-black shadow-xl shadow-black/30 backdrop-blur-xl
        ${desktopTransparent ? "lg:bg-transparent lg:shadow-none lg:backdrop-blur-0" : "lg:bg-black/90"}
      `}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          aria-label="The Butterfly Movement home"
          className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400]"
        >
          <img
            src={LogoImage}
            alt="The Butterfly Movement"
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-xs font-black uppercase tracking-[0.12em] transition xl:px-4 xl:text-sm ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href={SIGNUP_URL}
            className="ml-2 rounded-full bg-[#f5b400] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-105 hover:bg-[#ffcc22] xl:px-5 xl:text-sm"
          >
            Join Now
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b400] lg:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`
          lg:hidden
          fixed left-0 right-0 top-[72px] z-50
          h-[calc(100svh-72px)]
          bg-black
          px-4 py-5
          shadow-2xl shadow-black
          transition-all duration-300
          sm:top-[80px] sm:h-[calc(100svh-80px)]
          ${
            mobileOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <nav aria-label="Mobile navigation">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block rounded-2xl px-5 py-4 text-base font-black uppercase tracking-[0.12em] transition sm:text-lg ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-[#111111] text-white hover:bg-[#1b1b1b]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="pt-4">
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="block rounded-2xl bg-[#f5b400] px-5 py-4 text-center text-base font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#ffcc22] sm:text-lg"
              >
                Join Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;