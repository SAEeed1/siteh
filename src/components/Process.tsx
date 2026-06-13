"use client";

import React from "react";
import Image from "next/image";
import styles from "./Process.module.css";
import { toPersianNum } from "@/lib/persianNum";

const steps = [
  {
    id: 1,
    title: "آزمون اولیه",
    desc: "با یک آزمون شخصیت‌شناسی، خودتان را بهتر بشناسید.",
    icon: "/assets/icon-step-1.png",
    position: "top",
  },
  {
    id: 2,
    title: "مسیر اختصاصی",
    desc: "هوش مصنوعی بر اساس نتایج، مسیر رشد مخصوص شما را طراحی می‌کند.",
    icon: "/assets/icon-step-2.png",
    position: "bottom",
  },
  {
    id: 3,
    title: "یادگیری و تعامل",
    desc: "مقاله بخوانید، ویدیو ببینید و با دیگران در ارتباط باشید.",
    icon: "/assets/icon-step-3.png",
    position: "top",
  },
  {
    id: 4,
    title: "ارزیابی و سنجش",
    desc: "آزمون‌های متنوع پیشرفت شما را در هر مرحله می‌سنجند.",
    icon: "/assets/icon-step-4.png",
    position: "bottom",
  },
  {
    id: 5,
    title: "انتخاب آگاهانه",
    desc: "با رشد و شناخت بیشتر به یک انتخاب درست و رابطه‌ای موفق می‌رسید.",
    icon: "/assets/icon-step-5.png",
    position: "top",
  },
];

export default function Process() {
  return (
    <section className={styles.processSection} id="process">
      <div className={`container ${styles.processContainer}`}>
        <div className="section-title reveal">
          <h2>مسیر شما چگونه پیش می‌رود؟</h2>
          <p>ما قدم به قدم کنار شما هستیم تا به یک انتخاب آگاهانه و رابطه‌ای سالم برسید.</p>
        </div>

        {/* Timeline wrapper */}
        <div className={styles.timeline}>

          {/* Central track line */}
          <div className={styles.trackLine} aria-hidden="true">
            <div className={styles.trackProgress} />
          </div>

          {/* Steps */}
          <div className={styles.stepsRow}>
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className={`${styles.stepCol} reveal delay-${idx + 1}`}
              >
                {/* Top card — shown when position === "top" */}
                <div className={`${styles.stepCard} ${step.position === "top" ? styles.cardTop : styles.cardTopEmpty}`}>
                  {step.position === "top" && (
                    <>
                      <div className={styles.iconWrap}>
                        <div className={styles.iconCircle}>
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={76}
                            height={76}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </>
                  )}
                </div>

                {/* Node on track */}
                <div className={styles.trackNode}>
                  <span className={styles.nodeNum}>{toPersianNum(step.id)}</span>
                  {/* Connector line down from node to card */}
                  <div className={`${styles.nodeLine} ${step.position === "top" ? styles.nodeLineTop : styles.nodeLineBottom}`} />
                </div>

                {/* Bottom card — shown when position === "bottom" */}
                <div className={`${styles.stepCard} ${step.position === "bottom" ? styles.cardBottom : styles.cardBottomEmpty}`}>
                  {step.position === "bottom" && (
                    <>
                      <div className={styles.iconWrap}>
                        <div className={styles.iconCircle}>
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={76}
                            height={76}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
