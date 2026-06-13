"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./FinalCTA.module.css";

function LiveCount() {
  const [count, setCount] = useState(52);
  useEffect(() => {
    const iv = setInterval(() => {
      setCount((c) => {
        const delta = Math.random() > 0.5 ? 1 : 0;
        return Math.min(c + delta, 99);
      });
    }, 4500);
    return () => clearInterval(iv);
  }, []);
  return <>{count.toLocaleString("fa-IR")}</>;
}

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.ctaSection} ${visible ? styles.ctaVisible : ""}`} ref={ref}>
      <div className="container">
        <div className={styles.ctaBox}>
          {/* Animated background blobs */}
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
          <div className={styles.blob3} aria-hidden="true" />

          {/* Centered Content */}
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>رایگان · سریع · محرمانه</span>
            
            <h2 className={styles.ctaTitle}>
              آماده‌اید قدم بعدی خود را بردارید؟
            </h2>
            
            <p className={styles.ctaDesc}>
              در کمتر از ۱۰ دقیقه ارزیابی شوید و مسیر رشد و آمادگی ازدواج اختصاصی خود را دریافت کنید.
            </p>

            <a className={styles.ctaBtn} href="#start">
              <span>شروع ارزیابی رایگان</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.btnArrow}
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className={styles.shimmer} aria-hidden="true" />
            </a>

            {/* Live user badge directly under the button */}
            <div className={styles.liveBadge}>
              <span className={styles.liveDot} />
              <span>
                تاکنون <LiveCount /> نفر امروز ارزیابی خود را شروع کرده‌اند
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
