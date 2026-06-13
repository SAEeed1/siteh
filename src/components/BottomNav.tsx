"use client";

import React from "react";
import Image from "next/image";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (targetId === "#start") {
      const startBtn = document.querySelector('a[href="#start"]') as HTMLAnchorElement;
      if (startBtn) {
        startBtn.click();
      }
      return;
    }

    const target = document.querySelector(targetId);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.bottomNav} aria-label="منوی اپلیکیشن پایین صفحه">
      <div className={styles.navContainer}>
        {/* Tab 1: Smart Path */}
        <a href="#process" onClick={(e) => handleTabClick(e, "#process")} className={styles.navTab}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tabIcon}>
            <path d="M9 18l6-6-6-6" />
            <path d="M3 12h12" />
            <circle cx="18" cy="12" r="3" />
          </svg>
          <span className={styles.tabLabel}>مسیر هوشمند</span>
        </a>

        {/* Tab 2: Tests */}
        <a href="#start" onClick={(e) => handleTabClick(e, "#start")} className={styles.navTab}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tabIcon}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="9" y1="9" x2="15" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="13" y2="17" />
          </svg>
          <span className={styles.tabLabel}>آزمون‌ها</span>
        </a>

        {/* Center: Brand Logo Button */}
        <div className={styles.logoBtnWrap}>
          <a href="#start" onClick={(e) => handleTabClick(e, "#start")} className={styles.logoBtn} aria-label="شروع ارزیابی">
            <div className={styles.logoRing} />
            <Image
              src="/assets/logo.jpg"
              alt="حامین یار"
              width={48}
              height={48}
              className={styles.logoImg}
            />
          </a>
        </div>

        {/* Tab 3: Content */}
        <a href="#learn" onClick={(e) => handleTabClick(e, "#learn")} className={styles.navTab}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tabIcon}>
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <span className={styles.tabLabel}>محتوا</span>
        </a>

        {/* Tab 4: Forum */}
        <a href="#forum" onClick={(e) => handleTabClick(e, "#forum")} className={styles.navTab}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.tabIcon}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className={styles.tabLabel}>گفتگو</span>
        </a>
      </div>
    </nav>
  );
}
