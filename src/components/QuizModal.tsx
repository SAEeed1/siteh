"use client";

import React, { useState, useEffect } from "react";
import styles from "./QuizModal.module.css";
import { toPersianNum } from "@/lib/persianNum";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  text: string;
  options: string[];
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions: Question[] = [
    {
      text: "در روابط عاطفی، ترجیح می‌دهید چگونه عمل کنید؟",
      options: [
        "کاملاً مستقل و با تکیه بر تصمیمات خود",
        "هماهنگی و همبستگی مداوم در اکثر امور با طرف مقابل",
        "تعادلی منطقی بین فضای شخصی و کار تیمی دو نفره",
      ],
    },
    {
      text: "هنگام بروز اختلاف نظر با شریک عاطفی، واکنش معمول شما چیست؟",
      options: [
        "گفتگوی منطقی، شفاف و بدون جبهه‌گیری عاطفی",
        "سکوت، عقب‌نشینی موقت یا دوری موقت از تنش",
        "واکنش سریع، برون‌ریزی احساسات یا عصبانیت مقطعی",
      ],
    },
    {
      text: "مهم‌ترین معیار شما برای شروع زندگی مشترک کدام است؟",
      options: [
        "تفاهم عاطفی و هم‌مسیر بودن در رشد فردی متقابل",
        "ثبات مالی، موقعیت اجتماعی و امنیت خانوادگی",
        "جاذبه ظاهری، علایق تفریحی مشترک و سبک زندگی شبیه",
      ],
    },
  ];

  // Reset quiz state when opened/closed
  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setAnswers([]);
    }
  }, [isOpen]);

  // Simulate AI Analysis loading delay
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleStart = () => {
    setStep(1);
  };

  const handleOptionSelect = (optionIndex: number) => {
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Go to loading screen
    }
  };

  const handleFinalSubmit = () => {
    alert(
      "ثبت‌نام اولیه شما با موفقیت انجام شد!\nگزارش کامل تحلیل ارزیابی و مسیر رشد اختصاصی ۹۰ روزه در پنل کاربری شما بارگذاری گردید."
    );
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="بستن">
          <svg viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Step 0: Intro */}
        {step === 0 && (
          <div className={styles.introState}>
            <div className={styles.introIcon}>🌱</div>
            <h3>ارزیابی هوشمند حامین یار</h3>
            <p>
              دستیار هوش مصنوعی حامینیار با تحلیل علمی پاسخ‌های شما، اولین قدم از مسیر ازدواج آسانتان را مشخص می‌کند. پاسخ به سوالات کلاً ۲ دقیقه زمان می‌برد.
            </p>
            <button className="btn btn-primary btn-lg" onClick={handleStart}>
              شروع ارزیابی سریع
            </button>
          </div>
        )}

        {/* Steps 1, 2, 3: Questions */}
        {step >= 1 && step <= 3 && (
          <div style={{ width: "100%" }}>
            <div className={styles.stepIndicator}>سوال {toPersianNum(step)} از ۳</div>
            <h3 className={styles.questionText}>{questions[step - 1].text}</h3>
            <div className={styles.optionsList}>
              {questions[step - 1].options.map((option, idx) => (
                <button
                  key={idx}
                  className={styles.optionBtn}
                  onClick={() => handleOptionSelect(idx)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Loading Analysis */}
        {step === 4 && (
          <div>
            <div className={styles.loaderIcon}></div>
            <div className={styles.loaderText}>هوش مصنوعی حامینیار در حال تحلیل پاسخ‌های شماست...</div>
          </div>
        )}

        {/* Step 5: Results Screen */}
        {step === 5 && (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className={styles.resultsHeader}>تحلیل اولیه هوش مصنوعی برای شما آماده است!</div>

            {/* Custom Metrics Panel */}
            <div className={styles.resultMetrics}>
              <div className={styles.metricRow}>
                <div className={styles.metricHeader}>
                  <span>میزان آمادگی عاطفی</span>
                  <span>۷۲٪</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "72%" }}></div>
                </div>
              </div>
              <div className={styles.metricRow}>
                <div className={styles.metricHeader}>
                  <span>سبک ارتباطی شما</span>
                  <span>سازنده و تعاملی</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>

            <p className={styles.resultDesc}>
              پاسخ‌های شما نشان‌دهنده سبک ارتباطی بسیار سازنده است، اما تحلیل نشان می‌دهد برای ایجاد یک تفاهم پایدار نیاز است تا بر روی مهارت حل تعارض در مراحل عمیق‌تر آشنایی کار کنید.
              <br />
              <br />
              هوش مصنوعی حامینیار بر این اساس برای شما **یک مسیر ۹۰ روزه اختصاصی** شامل ۵ آزمون عمیق‌تر شخصیت، ۱۲ مقاله علمی و ۲۴ تمرین رفتاری برنامه‌ریزی کرده است.
            </p>

            <button className="btn btn-primary btn-lg" style={{ width: "100%" }} onClick={handleFinalSubmit}>
              دریافت برنامه کامل و شروع مسیر اختصاصی
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
