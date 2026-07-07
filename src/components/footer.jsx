import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d10] text-[#f5f0e5] py-14 border-t border-[#1b1d22]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#f5b400] mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="/"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/founder"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  Founder
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-[#f5b400] mb-4 tracking-wide">
              Programs
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="/brawlers-boxing"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  Brawlers Boxing
                </a>
              </li>
              <li>
                <a
                  href="/grappling"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  Grappling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#f5b400] mb-4 tracking-wide">
              Contact
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#f5b400] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <p>Email: info@thebutterflymovement.health</p>
              </li>
              <li>
                <p>Phone: 07715316840</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-[#f5b400] mb-4 tracking-wide">
              Follow Us
            </h3>
            <div className="flex space-x-5">
              {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-[#f5b400] transition-all"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#1b1d22] mt-10 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} The Butterfly Movement. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
