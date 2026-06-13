"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stages from "@/components/Stages";
import Process from "@/components/Process";
import Features from "@/components/Features";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import QuizModal from "@/components/QuizModal";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    // Global Scroll Reveal Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealActive");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Intercept clicks on links pointing to #start to launch the Quiz Modal
    const handleStartClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href") === "#start") {
        e.preventDefault();
        setIsQuizOpen(true);
      }
    };

    document.addEventListener("click", handleStartClicks);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleStartClicks);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stages />
        <Process />
        <Features />
        <FinalCTA />
      </main>
      <Footer />

      {/* App-style Mobile Bottom Navigation */}
      <BottomNav />

      {/* Quiz Assessment Modal */}
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
