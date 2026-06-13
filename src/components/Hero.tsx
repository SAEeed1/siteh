"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleStartClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#start");
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Right Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            همراه هوشمند شما
            <br />
            <strong>در مسیر ازدواج</strong>
          </h1>
          <p className={styles.description}>
            با ارزیابی علمی و طراحی مسیر اختصاصی، قدم به قدم تا انتخاب درست و یک زندگی موفق همراهتان هستیم.
          </p>

          <div className={styles.heroActions}>
            <a
              className={`btn btn-primary ${styles.heroCta}`}
              href="#start"
              onClick={handleStartClick}
            >
              شروع ارزیابی رایگان
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.arrowIcon}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.trustIcon}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>همراه هوشمند</span>
            </div>
            <div className={styles.trustItem}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.trustIcon}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="m9 11 2 2 4-4"></path>
              </svg>
              <span>محتوای علمی و معتبر</span>
            </div>
            <div className={styles.trustItem}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.trustIcon}
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>کاملاً محرمانه</span>
            </div>
          </div>
        </div>

        {/* Left Visual */}
        <div className={styles.heroVisual} aria-label="تصویر هوش مصنوعی حامین یار">
          <div className={styles.aquaCircle}></div>

          <div className={styles.peopleBg}>
            <Image
              src="/assets/hero-main-new.png"
              alt="پروفایل زوج حامینیار"
              width={560}
              height={400}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.plant} aria-hidden="true">
            <div className={styles.plantPot}></div>
            <div className={styles.plantLeaves}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
