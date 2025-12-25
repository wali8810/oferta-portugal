"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const salesData = [
  { name: 'Paola Mendoza' },
  { name: 'Ana Costa' },
  { name: 'Beatriz Almeida' },
  { name: 'Juan Carlos' },
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [isClient, setIsClient] = useState(false);
  const [timeAgo, setTimeAgo] = useState(2);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // This component is now being handled by the notiflix script
    return;

    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * salesData.length);
      setCurrentSale(salesData[randomIndex]);
      setTimeAgo(Math.floor(Math.random() * 59) + 1);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    const initialTimeout = setTimeout(showNotification, 8000);
    const interval = setInterval(showNotification, Math.random() * (45000 - 30000) + 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-2xl border border-border">
        <CheckCircle className="h-6 w-6 text-green-500" />
        <p className="text-sm text-foreground">
          <strong>{currentSale.name}</strong> acabou de comprar há {timeAgo} minutos
        </p>
      </div>
    </div>
  );
}
