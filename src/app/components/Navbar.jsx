"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "80px",
        background: "rgba(250, 250, 250, 0.1)",
        transition: "all .5s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "80px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              lineHeight: "80px",
              color: "#fff",
              fontSize: "32px",
              fontWeight: "800",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            FIT<span style={{ color: "#ed563b" }}>ZO</span>
            {/* <em style={{ color: "#ed563b", fontStyle: "normal" }}>Studio</em> */}
          </Link>

          {/* Desktop / Mobile Menu */}
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: menuOpen ? "flex" : "flex",
              flexDirection: menuOpen ? "column" : "row",
              position: menuOpen ? "absolute" : "static",
              top: menuOpen ? "80px" : "auto",
              left: 0,
              width: menuOpen ? "100%" : "auto",
              background: menuOpen ? "#fff" : "transparent",
              textAlign: menuOpen ? "center" : "right",
              transition: "all 0.3s ease",
            }}
            className="menu"
          >
            {[
              { name: "Home", href: "#top" },
              { name: "About", href: "#features" },
              { name: "Classes", href: "#our-classes" },
              { name: "Schedules", href: "#schedule" },
              { name: "Contact", href: "#contact-us" },
            ].map((item) => (
              <li
                key={item.name}
                style={{ padding: menuOpen ? "10px 0" : "0 20px" }}
              >
                <a
                  href={item.href}
                  style={{
                    fontWeight: 700,
                    fontSize: "13px",
                    color: menuOpen ? "#232d39" : "#fff",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    lineHeight: "40px",
                    display: "block",
                    borderBottom: "2px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.borderBottomColor = "#ed563b")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.borderBottomColor = "transparent")
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Sign Up Button */}
            {/* <li style={{ padding: menuOpen ? "10px 0" : "0 20px" }}>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  padding: "11px 17px",
                  backgroundColor: "#ed563b",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  borderRadius: "4px",
                }}
              >
                Sign Up
              </a>
            </li> */}
          </ul>

          {/* Mobile Menu Trigger */}
          <div
            onClick={toggleMenu}
            style={{
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "25px",
              height: "18px",
            }}
            className="menu-trigger"
          >
            <span
              style={{ height: "3px", background: "#fff", borderRadius: "2px" }}
            ></span>
            <span
              style={{ height: "3px", background: "#fff", borderRadius: "2px" }}
            ></span>
            <span
              style={{ height: "3px", background: "#fff", borderRadius: "2px" }}
            ></span>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .menu-trigger {
            display: flex !important;
          }
          .menu {
            display: ${menuOpen ? "flex" : "none"} !important;
          }
        }
      `}</style>
    </header>
  );
}
