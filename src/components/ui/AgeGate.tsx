import React, { useState, useEffect } from 'react';

export const AgeGate = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVerified = document.cookie.includes('age_verified=true');
    if (!hasVerified) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleEnter = () => {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `age_verified=true;expires=${d.toUTCString()};path=/`;
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  const handleExit = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 font-sans">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center shadow-2xl">
        <h2 className="text-xl font-extrabold text-white tracking-wide">18+ AGE VERIFICATION</h2>
        <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
          This page contains age-restricted content. Please confirm you are at least 18 years old to proceed.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleEnter}
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-3.5 text-sm font-bold text-white transition hover:opacity-90 active:scale-[0.98]"
          >
            I am 18 or older — Enter
          </button>
          <button
            onClick={handleExit}
            className="w-full rounded-xl border border-neutral-800 bg-transparent py-3 text-sm font-medium text-neutral-400 transition hover:bg-neutral-800 hover:text-white"
          >
            Exit / I am under 18
          </button>
        </div>
      </div>
    </div>
  );
};
