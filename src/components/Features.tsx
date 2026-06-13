"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Features.module.css";

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const steps = 60;
    const step = target / steps;
    const interval = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.round(start));
      if (start >= target) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target, duration]);
  return count;
}

const features = [
  {
    id: "video",
    title: "ویدیوهای آموزشی",
    desc: "ویدیوهای کوتاه و کاربردی برای یادگیری مهارت‌های مهم زندگی مشترک — هر هفته محتوای جدید",
    icon: "/assets/feature-tv.png",
    stat: 200,
    statLabel: "ویدیو",
    color: "#ff9b27",
    colorSoft: "rgba(255,155,39,0.09)",
    colorMid: "rgba(255,155,39,0.2)",
    size: "large",   // spans 2 rows
  },
  {
    id: "quiz",
    title: "آزمون‌های متنوع",
    desc: "۴ نوع آزمون در مراحل مختلف برای شناخت دقیق‌تر",
    icon: "/assets/feature-quiz.png",
    stat: 4,
    statLabel: "نوع آزمون",
    color: "#43a25f",
    colorSoft: "rgba(67,162,95,0.09)",
    colorMid: "rgba(67,162,95,0.2)",
    size: "small",
  },
  {
    id: "article",
    title: "مقالات علمی",
    desc: "محتوای معتبر و ساده برای شناخت بهتر خود و مسیر ازدواج",
    icon: "/assets/feature-book.png",
    stat: 150,
    statLabel: "مقاله",
    color: "#3b82f6",
    colorSoft: "rgba(59,130,246,0.09)",
    colorMid: "rgba(59,130,246,0.2)",
    size: "small",
  },
  {
    id: "forum",
    title: "تالار گفتگو",
    desc: "فضایی امن برای به‌اشتراک‌گذاری تجربه‌ها، دریافت راهنمایی و همراهی با دیگران در مسیر",
    icon: "/assets/feature-forum.png",
    stat: 1200,
    statLabel: "عضو فعال",
    color: "#7c5cbf",
    colorSoft: "rgba(124,92,191,0.09)",
    colorMid: "rgba(124,92,191,0.2)",
    size: "wide",   // spans 2 cols
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const counts = {
    video:   useCountUp(200,  1600, visible),
    quiz:    useCountUp(4,    900,  visible),
    article: useCountUp(150,  1400, visible),
    forum:   useCountUp(1200, 1800, visible),
  };

  return (
    <section className={styles.featuresSection} id="learn" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <h2>چه چیزی در حامین‌یار پیدا می‌کنید؟</h2>
          <p>همه ابزارهایی که برای یک انتخاب آگاهانه نیاز دارید — در یک جا.</p>
        </div>

        <div className={styles.bentoGrid}>
          {features.map((f, idx) => (
            <article
              key={f.id}
              className={`${styles.bentoCard} ${styles[`card_${f.size}`]} ${styles[`accent_${f.id}`]} reveal delay-${idx + 1}`}
              style={{
                "--fc": f.color,
                "--fc-soft": f.colorSoft,
                "--fc-mid": f.colorMid,
              } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div className={styles.accentBar} aria-hidden="true" />

              {/* Background icon (watermark) */}
              <div className={styles.bgIcon} aria-hidden="true">
                <Image src={f.icon} alt="" width={160} height={160} style={{ objectFit: "contain" }} />
              </div>

              {/* Content */}
              <div className={styles.cardBody}>
                <div className={styles.iconWrap}>
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }}
                    className={styles.featureIcon}
                  />
                </div>

                <div className={styles.cardText}>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>

              {/* Stat counter */}
              <div className={styles.statChip}>
                <span className={styles.statNum}>
                  +{counts[f.id as keyof typeof counts].toLocaleString("fa-IR")}
                </span>
                <span className={styles.statLabel}>{f.statLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
