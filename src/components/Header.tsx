"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);
    setMenuOpen(false);

    if (targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(targetId);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - (scrolled ? 76 : 90);
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const navRight = [
    { id: "#", label: "صفحه اصلی" },
    { id: "#process", label: "مسیر هوشمند" },
    { id: "#tests", label: "آزمون‌ها" },
  ];

  const navLeft = [
    { id: "#learn", label: "محتوای چند رسانه‌ای" },
    { id: "#forum", label: "تالار گفتگو" },
    { id: "#about", label: "درباره ما" },
  ];

  return (
    <header className={`${styles.topbar} ${scrolled ? styles.scrolled : ""}`} id="topbar">
      {/* Gradient border line on top */}
      <div className={styles.gradientBorder} aria-hidden="true" />

      <div className={`container ${styles.navWrap}`}>

        {/* ── Right nav ── */}
        <nav className={`${styles.navLinks} ${styles.rightNav}`} aria-label="منوی راست">
          {navRight.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={activeSection === item.id ? styles.navLinkActive : styles.navLink}
            >
              {activeSection === item.id && <span className={styles.activePill} aria-hidden="true" />}
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Center brand ── */}
        <a className={styles.brand} href="#" onClick={(e) => handleLinkClick(e, "#")}>
          <Image
            src="/assets/logo.jpg"
            alt="حامین یار"
            width={52}
            height={52}
            priority
            className={styles.brandLogo}
          />
        </a>

        {/* ── Left nav + CTA ── */}
        <div className={styles.leftNavGroup}>
          <nav className={`${styles.navLinks} ${styles.leftNav}`} aria-label="منوی چپ">
            {navLeft.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={activeSection === item.id ? styles.navLinkActive : styles.navLink}
              >
                {activeSection === item.id && <span className={styles.activePill} aria-hidden="true" />}
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            className={`btn btn-primary ${styles.ctaBtn}`}
            href="#start"
            onClick={(e) => handleLinkClick(e, "#start")}
          >
            شروع رایگان
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="باز کردن منو"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} id="mobileMenu">
        {[...navRight, ...navLeft].map((item) => (
          <a key={item.id} href={item.id} onClick={(e) => handleLinkClick(e, item.id)}>
            {item.label}
          </a>
        ))}
        <a href="#start" className="btn btn-primary" onClick={(e) => handleLinkClick(e, "#start")}>
          شروع ارزیابی رایگان
        </a>
      </div>
    </header>
  );
}
