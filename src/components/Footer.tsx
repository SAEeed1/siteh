"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top Grid Area */}
        <div className={styles.footerGrid}>
          <a className={styles.footerBrand} href="#">
            <svg viewBox="0 0 48 48" className={styles.brandIcon}>
              <path d="M24 41s-15-8.7-19-20C2.2 13.2 7.6 6 15.2 6c4 0 6.9 2 8.8 4.6C25.9 8 28.8 6 32.8 6 40.4 6 45.8 13.2 43 21 39 32.3 24 41 24 41Z" />
            </svg>
            <span>حامین یار</span>
          </a>

          <nav className={styles.footerLinks} aria-label="لینک‌های فوتر">
            <a href="#about" onClick={(e) => handleFooterLinkClick(e, "#about")}>
              درباره ما
            </a>
            <a href="#">قوانین و مقررات</a>
            <a href="#">حریم خصوصی</a>
            <a href="#forum" onClick={(e) => handleFooterLinkClick(e, "#forum")}>
              سوالات متداول
            </a>
          </nav>
        </div>

        {/* Bottom Area */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>تمامی حقوق مادی و معنوی متعلق به حامین‌یار است © ۱۴۰۳</div>

          <div className={styles.socials}>
            <a className={styles.socialIcon} href="#" aria-label="تلگرام">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.74 7.59-3.27 3.61-1.5 4.36-1.76 4.85-1.77.11 0 .35.03.5.15.13.12.17.27.18.39z" />
              </svg>
            </a>
            <a className={styles.socialIcon} href="#" aria-label="اینستاگرام">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a className={styles.socialIcon} href="#" aria-label="یوتیوب">
              <svg viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a className={styles.socialIcon} href="#" aria-label="ایکس">
              <svg viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
