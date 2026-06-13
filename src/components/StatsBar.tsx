"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsBar.module.css";

const stats = [
  {
    id: 1,
    target: 25000,
    suffix: "+",
    label: "کاربر فعال",
    color: "#00a9ad",
    colorSoft: "rgba(0,169,173,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 2,
    target: 150,
    suffix: "+",
    label: "مقاله علمی",
    color: "#3b82f6",
    colorSoft: "rgba(59,130,246,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: 3,
    target: 300,
    suffix: "+",
    label: "ویدیو آموزشی",
    color: "#ff9b27",
    colorSoft: "rgba(255,155,39,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    id: 4,
    target: 30,
    suffix: "+",
    label: "آزمون تخصصی",
    color: "#43a25f",
    colorSoft: "rgba(67,162,95,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    id: 5,
    target: 10000,
    suffix: "+",
    label: "ساعت آموزش",
    color: "#7c5cbf",
    colorSoft: "rgba(124,92,191,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const stepVal = target / steps;
    let cur = 0;
    const iv = setInterval(() => {
      cur = Math.min(cur + stepVal, target);
      setVal(Math.round(cur));
      if (cur >= target) clearInterval(iv);
    }, duration / steps);
    return () => clearInterval(iv);
  }, [active, target]);

  const toFa = (n: number) =>
    n.toLocaleString("fa-IR");

  return <>{toFa(val)}{suffix}</>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`container ${styles.statsContainer} reveal`} ref={ref}>
      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div
            key={s.id}
            className={styles.statCard}
            style={{
              "--sc": s.color,
              "--sc-soft": s.colorSoft,
              animationDelay: `${i * 80}ms`,
            } as React.CSSProperties}
          >
            <div className={styles.iconCircle}>
              <span className={styles.iconInner}>{s.icon}</span>
            </div>
            <div className={styles.statText}>
              <span className={styles.statValue}>
                <CountUp target={s.target} suffix={s.suffix} active={active} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
