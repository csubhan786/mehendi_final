"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/Navbar.css";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand1">Najneen Mehendi Designer</div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="/" className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link href="/gallery" className={isActive("/gallery") ? "active" : ""} onClick={handleLinkClick}>Gallery</Link>
          </li>
          <li>
            <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link href="/services" className={isActive("/services") ? "active" : ""} onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
