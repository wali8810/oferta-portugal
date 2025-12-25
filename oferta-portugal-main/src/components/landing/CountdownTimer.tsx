"use client";

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(6 * 60 + 54); // 6 minutos e 54 segundos
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run this component on the client
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isVisible]);

  if (!isVisible) {
    return null;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center mt-4">
      <p className="text-white/80 mb-2 uppercase font-bold text-accent">
        🚨 A OFERTA TERMINA EM:
      </p>
      <div className="inline-block bg-black/70 backdrop-blur-sm text-white font-bold rounded-lg px-6 py-3 shadow-lg border border-white/30">
        <span className="text-4xl tracking-widest">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
