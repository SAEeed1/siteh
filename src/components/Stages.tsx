"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Stages.module.css";
import { toPersianNum } from "@/lib/persianNum";

const stages = [
  {
    id: 1,
    title: "هنوز آماده نیستم",
    desc: "خودشناسی و رشد فردی برای رسیدن به آمادگی واقعی ازدواج.",
    icon: "/assets/stage-grow-new.png",
    color: "#7c5cbf",
    colorSoft: "rgba(124, 92, 191, 0.10)",
    colorMid:  "rgba(124, 92, 191, 0.22)",
    label: "خودشناسی",
  },
  {
    id: 2,
    title: "تصمیم به ازدواج دارم",
    desc: "جستجو برای پیدا کردن فرد مناسب با معیارهای علمی و درست.",
    icon: "/assets/stage-search-new.png",
    color: "#00a9ad",
    colorSoft: "rgba(0, 169, 173, 0.10)",
    colorMid:  "rgba(0, 169, 173, 0.22)",
    label: "جستجوی همسر",
  },
  {
    id: 3,
    title: "در حال آشنایی هستم",
    desc: "شناخت عمیق‌تر و تصمیم‌گیری آگاهانه برای ادامه مسیر.",
    icon: "/assets/stage-chat-new.png",
    color: "#e0527a",
    colorSoft: "rgba(224, 82, 122, 0.10)",
    colorMid:  "rgba(224, 82, 122, 0.22)",
    label: "دوره آشنایی",
  },
  {
    id: 4,
    title: "نامزد کرده‌ام",
    desc: "آمادگی برای زندگی مشترک و حل چالش‌های پیش رو.",
    icon: "/assets/stage-ring-new.png",
    color: "#d4920a",
    colorSoft: "rgba(212, 146, 10, 0.10)",
    colorMid:  "rgba(212, 146, 10, 0.22)",
    label: "دوره نامزدی",
  },
];

export default function Stages() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelected(id);
    // Smooth scroll to quiz/start section
    setTimeout(() => {
      const target = document.querySelector("#start");
      if (target) {
        const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }, 320);
  };

  return (
    <section className={styles.stagesSection} id="start">
      <div className={`container ${styles.stagesContainer}`}>
        <div className="section-title reveal">
          <h2>شما الان در کدام مرحله هستید؟</h2>
          <p>مرحله خود را انتخاب کنید تا مسیر اختصاصی شما طراحی شود.</p>
        </div>

        <div className={styles.stagesGrid}>
          {stages.map((stage, idx) => {
            const isSelected = selected === stage.id;

            return (
              <React.Fragment key={stage.id}>
                <article
                  className={`${styles.stageCard} ${isSelected ? styles.stageCardSelected : ""} reveal delay-${idx + 1}`}
                  style={{
                    "--stage-color":     stage.color,
                    "--stage-color-soft": stage.colorSoft,
                    "--stage-color-mid":  stage.colorMid,
                  } as React.CSSProperties}
                  onClick={() => handleSelect(stage.id)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => e.key === "Enter" && handleSelect(stage.id)}
                >
                  {/* Selected checkmark badge */}
                  {isSelected && (
                    <span className={styles.checkBadge} aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}

                  {/* Stage label chip */}
                  <span className={styles.stageLabel}>{stage.label}</span>

                  {/* Icon */}
                  <div className={styles.iconWrap}>
                    <div className={styles.iconCircle}>
                      <Image
                        src={stage.icon}
                        alt={stage.title}
                        width={80}
                        height={80}
                        className={styles.iconImg}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>

                  {/* Step number */}
                  <span className={styles.stepNum}>{toPersianNum(stage.id)}</span>

                  <h3 className={styles.stageTitle}>{stage.title}</h3>
                  <p className={styles.stageDesc}>{stage.desc}</p>

                  <button className={styles.miniBtn} tabIndex={-1}>
                    {isSelected ? "✓ انتخاب شد" : "انتخاب این مسیر"}
                  </button>
                </article>

                {idx < stages.length - 1 && (
                  <div className={`${styles.connector} reveal delay-${idx + 1}`} aria-hidden="true">
                    <svg viewBox="0 0 80 24" className={styles.connectorSvg} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`cg-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stopColor={stages[idx].color}     stopOpacity="0.5" />
                          <stop offset="100%" stopColor={stages[idx + 1].color} stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M4,12 H76"
                        stroke={`url(#cg-${idx})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray="6,5"
                      />
                      <polyline
                        points="10,6 4,12 10,18"
                        fill="none"
                        stroke={stages[idx].color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
