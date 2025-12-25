"use client";

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutos
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
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          sessionStorage.setItem('upsell_timer_vivendo_da_caixa', String(prevTime - 1));
          return prevTime - 1;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isVisible]);

  useEffect(() => {
    if (isVisible) {
      const savedTime = sessionStorage.getItem('upsell_timer_vivendo_da_caixa');
      if (savedTime && !isNaN(Number(savedTime)) && Number(savedTime) > 0) {
        setTimeLeft(Number(savedTime));
      }
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-black text-white text-center py-2">
      <p className="text-sm uppercase font-bold">
        Oferta especial <span className="underline">disponível apenas nesta página</span>. Se sair agora, não terá acesso novamente a este valor promocional.
      </p>
      {timeLeft > 0 ? (
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-white/80 text-sm font-medium">A oferta expira em: </span>
          <div className="inline-block bg-yellow-400 text-black font-bold rounded px-3 py-1 text-lg animate-pulse-yellow">
            <span>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      ) : (
         <p className="text-destructive font-bold mt-1">Oferta expirada!</p>
      )}
    </div>
  );
}
