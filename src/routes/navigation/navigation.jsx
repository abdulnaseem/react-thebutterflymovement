// src/components/navigation/Navigation.jsx
import { useState, useCallback, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// Centralised navigation config for scalability
const NAV_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/about" },
  { id: "founder", label: "Founder", to: "/founder" },
  {
    id: "clubs",
    label: "Clubs",
    children: [
      { id: "brawlers", label: "Brawlers Boxing", to: "/brawlers-boxing" },
      // { id: "grapple", label: "The Grapple Hub", to: "/the-grapple-hub" },
    ],
  },
//   { id: "contact", label: "Contact", to: "/contact" },
];

// Utility for active link styling – tuned to logo colours
const linkBaseClasses =
  "inline-flex items-center text-sm font-medium transition-colors duration-150 px-3 py-2 rounded-full";
const linkActiveClasses =
  "text-[#050608] bg-[#f5f0e5]"; // cream pill on dark
const linkInactiveClasses =
  "text-[#f5f0e5] hover:bg-[#141416] hover:text-[#f5f0e5]";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const location = useLocation();

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  const handleDropdownToggle = useCallback((id) => {
    setOpenDropdownId((current) => (current === id ? null : id));
  }, []);

  const handleDropdownKeyDown = (event, id) => {
    if (event.key === "Escape") {
      setOpenDropdownId(null);
      event.stopPropagation();
    }
  };

  // Close mobile nav + dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdownId(null);
  }, [location.pathname]);

  // Scroll-lock ONLY while mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-[#050608] backdrop-blur border-b border-[#15161a]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
        role="navigation"
      >
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f0e5] rounded-lg"
        >
          {/* stacked logo like the image */}
          <div className="flex flex-col leading-none mma-logo-font text-[#f5f0e5]">
            <span className="text-xs sm:text-sm">THE</span>
            <span className="text-lg sm:text-xl md:text-2xl">BUTTERFLY</span>
            <span className="text-xs sm:text-sm">MOVEMENT</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex items-center gap-2" role="menubar">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li
                  key={item.id}
                  className="relative group"
                  role="none"
                  onKeyDown={(e) => handleDropdownKeyDown(e, item.id)}
                >
                  <button
                    type="button"
                    id={`desktop-${item.id}-button`}
                    className={`${linkBaseClasses} ${linkInactiveClasses} gap-1`}
                    aria-haspopup="menu"
                    aria-expanded={openDropdownId === item.id}
                    aria-controls={`desktop-${item.id}-menu`}
                    onClick={() => handleDropdownToggle(item.id)}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs" aria-hidden="true">
                      ▾
                    </span>
                  </button>

                  {/* Dropdown panel */}
                  <div
                    id={`desktop-${item.id}-menu`}
                    className={`
                      absolute left-0 mt-2 min-w-[12rem] rounded-xl border border-[#2b2d33] bg-[#050608]
                      shadow-xl opacity-0 translate-y-2 pointer-events-none
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                      transition-all duration-150 ease-out
                      ${
                        openDropdownId === item.id
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : ""
                      }
                    `}
                    role="menu"
                    aria-label={item.label}
                  >
                    <ul className="py-2">
                      {item.children.map((child) => (
                        <li key={child.id} role="none">
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive
                                  ? "text-[#050608] bg-[#f5f0e5]"
                                  : "text-[#f5f0e5] hover:bg-[#141416]"
                              }`
                            }
                            role="menuitem"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.id} role="none">
                  <NavLink
                    to={item.to}
                    role="menuitem"
                    className={({ isActive }) =>
                      `${linkBaseClasses} ${
                        isActive ? linkActiveClasses : linkInactiveClasses
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* CTA – keep as accent, slightly warmer cream/yellow */}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-[#f5f0e5] px-4 py-2 text-sm font-semibold text-[#050608] hover:bg-[#f9f4e8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f0e5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608]"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#f5f0e5] hover:bg-[#141416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f0e5] md:hidden"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiOutlineMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-nav"
        className={`
          md:hidden fixed inset-0 z-50
          bg-[#050608]
          transition-opacity duration-200
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        aria-hidden={!mobileOpen}
      >
        {/* Full-screen panel */}
        <div className="flex flex-col h-screen w-full bg-[#050608]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#15161a]">
            <div className="flex flex-col leading-none">
              <span className="mma-logo-font text-sm text-[#f5f0e5]">
                THE
              </span>
              <span className="mma-logo-font text-lg text-[#f5f0e5]">
                BUTTERFLY
              </span>
              <span className="mma-logo-font text-sm text-[#f5f0e5]">
                MOVEMENT
              </span>
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-[#f5f0e5] hover:bg-[#141416] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f0e5]"
              onClick={closeMobile}
              aria-label="Close navigation"
            >
              <HiOutlineX className="h-5 w-5" />
            </button>
          </div>

          {/* Menu items */}
          <nav
            className="px-3 py-4 overflow-y-auto flex-1"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.id} className="border-b border-[#15161a] pb-2">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-2 py-2 text-left 
                                 text-sm font-medium text-[#f5f0e5] rounded-lg 
                                 hover:bg-[#141416] focus:outline-none focus-visible:ring-2 
                                 focus-visible:ring-[#f5f0e5]"
                      onClick={() => handleDropdownToggle(item.id)}
                      aria-expanded={openDropdownId === item.id}
                    >
                      {item.label}
                      <span className="text-xs">
                        {openDropdownId === item.id ? "▴" : "▾"}
                      </span>
                    </button>

                    {openDropdownId === item.id && (
                      <ul className="mt-1 ml-3 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <NavLink
                              to={child.to}
                              onClick={closeMobile}
                              className={({ isActive }) =>
                                `block rounded-lg px-3 py-2 text-sm ${
                                  isActive
                                    ? "text-[#050608] bg-[#f5f0e5]"
                                    : "text-[#f5f0e5] hover:bg-[#141416]"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.id}>
                    <NavLink
                      to={item.to}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-sm ${
                          isActive
                            ? "text-[#050608] bg-[#f5f0e5]"
                            : "text-[#f5f0e5] hover:bg-[#141416]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}

              <li className="pt-3">
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="block w-full rounded-full bg-[#f5f0e5] px-4 py-2 text-center 
                             text-sm font-semibold text-[#050608] hover:bg-[#f9f4e8] 
                             transition-colors focus:outline-none focus-visible:ring-2 
                             focus-visible:ring-[#f5f0e5]"
                >
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
