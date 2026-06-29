import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Twitter, Lock, ArrowRight, Eye, Sparkles, X } from "lucide-react";

import avatar from "@/assets/sophie-avatar.jpg";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";
import m6 from "@/assets/model-6.jpg";
import m7 from "@/assets/model-7.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophie ✨ — Your favourite girl next door" },
      { name: "description", content: "Sophie's link in bio — unlock exclusive private content." },
      { property: "og:title", content: "Sophie ✨" },
      { property: "og:description", content: "Click below to see what I look like private 🌶️" },
    ],
  }),
  component: Index,
});

const bgImages = [m1, m2, m3, m4, m6, m7, m1, m2, m3, m4, m6, m7];

const fakeNames = ["User49xx", "Mike_R", "Alex88", "j.thompson", "K.Walker", "Daniel21", "ryan_m", "Chris.92", "T_morgan", "Lucas.b"];
const timeAgo = ["just now", "30s ago", "1m ago", "2m ago", "just now", "45s ago"];

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 22 22" className="h-6 w-6 shrink-0" aria-label="Verified">
      <path
        fill="oklch(0.65 0.2 240)"
        d="M11 0l2.4 2L16.6 1.5l1.4 2.9 3 1.1-.4 3.2 2 2.3-2 2.3.4 3.2-3 1.1-1.4 2.9-3.2-.5L11 22l-2.4-2L5.4 20.5 4 17.6l-3-1.1.4-3.2-2-2.3 2-2.3L1 5.5l3-1.1L5.4 1.5 8.6 2 11 0z"
      />
      <path fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M6.5 11.3l3 3 6-6.2" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.45a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.38z"/>
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a1.5 1.5 0 0 0-1.5 1.5c0 .3.1.6.2.8L9.1 8.5c-2 .1-3.8.7-5.1 1.6a2.1 2.1 0 1 0-2.4 3.3 4.6 4.6 0 0 0-.1.9c0 3.6 4.7 6.6 10.5 6.6s10.5-3 10.5-6.6c0-.3 0-.6-.1-.9a2.1 2.1 0 1 0-2.4-3.3c-1.3-.9-3.1-1.5-5.1-1.6l1.4-3.7 3 .6a1.3 1.3 0 1 0 .1-1L15.5 4l-1.8 4.4c-.2-.1-.4-.1-.7-.1a1.5 1.5 0 0 0-1-3zM8.5 12.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-7.4 4.9a.5.5 0 0 1 .7 0c.8.8 2 1.2 3.2 1.2s2.4-.4 3.2-1.2a.5.5 0 0 1 .7.7c-1 1-2.4 1.5-3.9 1.5s-2.9-.5-3.9-1.5a.5.5 0 0 1 0-.7z"/>
    </svg>
  );
}

function SocialButton({
  icon, label, href,
}: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:border-white/25 hover:bg-white/[0.12] active:scale-[0.98]"
    >
      <span className="text-white/90 transition-transform group-hover:scale-110">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function BackgroundGrid() {
  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2 sm:grid-cols-4 sm:gap-3 sm:p-3 md:grid-cols-6">
        {bgImages.map((src, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl ${i % 2 === 0 ? "animate-float-slow" : "animate-float-slow-rev"}`}
            style={{
              aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "3/5",
              animationDelay: `${(i % 5) * 0.6}s`,
            }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-60"
            />
          </div>
        ))}
      </div>
      {/* dim + blur overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-md" />
      {/* radial vignette + magenta glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.6 0.3 340 / 0.18), transparent 60%), radial-gradient(ellipse 100% 80% at 50% 100%, oklch(0.08 0.02 300 / 0.85), transparent 70%)",
        }}
      />
    </div>
  );
}

function FakeToast() {
  const [toast, setToast] = useState<{ id: number; name: string; time: string } | null>(null);

  useEffect(() => {
    let mounted = true;
    let timeout: ReturnType<typeof setTimeout>;
    const show = () => {
      if (!mounted) return;
      const id = Date.now();
      const name = fakeNames[Math.floor(Math.random() * fakeNames.length)];
      const time = timeAgo[Math.floor(Math.random() * timeAgo.length)];
      setToast({ id, name, time });
      timeout = setTimeout(() => {
        setToast(null);
        timeout = setTimeout(show, 2500 + Math.random() * 2500);
      }, 4500);
    };
    timeout = setTimeout(show, 2500);
    return () => { mounted = false; clearTimeout(timeout); };
  }, []);

  if (!toast) return null;
  return (
    <div
      key={toast.id}
      className="animate-toast-in fixed bottom-4 left-4 z-50 max-w-[88vw] sm:max-w-xs"
    >
      <div className="glass-card gradient-border-glow flex items-center gap-3 rounded-2xl px-3.5 py-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-magenta to-magenta-glow text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-white">
            {toast.name} just unlocked
          </p>
          <p className="truncate text-[11px] text-white/60">
            Sophie's private world · {toast.time}
          </p>
        </div>
      </div>
    </div>
  );
}

function LiveViewers() {
  const [count, setCount] = useState(418);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => Math.max(380, Math.min(520, c + Math.round((Math.random() - 0.45) * 6))));
    }, 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 text-[12px] text-white/70">
      <span className="text-amber-300">⚡</span>
      <span><span className="font-bold text-white tabular-nums">{count}</span> people viewing Sophie right now</span>
    </div>
  );
}

function ImageLightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-slide-up-fade"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt={label}
        className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function Index() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);
  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden text-white">
      <BackgroundGrid />

      {/* Centered card */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-8">
        <div className="animate-slide-up-fade glass-card gradient-border-glow w-full max-w-md rounded-[28px] p-6 sm:p-8">
          {/* Online + Avatar */}
          <div className="flex flex-col items-center">
            <div className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inset-0 rounded-full bg-online animate-pulse-dot" />
                <span className="relative h-2 w-2 rounded-full bg-online" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">Online Now</span>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 -m-1 rounded-full blur-md"
                style={{ background: "var(--gradient-magenta)" }}
              />
              <img
                src={avatar}
                alt="Sophie"
                width={128}
                height={128}
                className="relative h-28 w-28 rounded-full border-2 border-white/30 object-cover shadow-2xl"
              />
            </div>

            {/* Name + verified */}
            <div className="mt-4 flex items-center gap-2">
              <h1 className="text-2xl font-extrabold tracking-tight">Sophie</h1>
              <VerifiedBadge />
            </div>

            {/* Bio */}
            <div className="mt-3 space-y-1 text-center">
              <p className="text-[15px] text-white/85">Click below to see what I look like private 🌶️</p>
              <p className="text-[15px] text-white/85">Your favourite girl next door ✨</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#vip"
            className="btn-magenta animate-pulse-glow group relative mt-6 flex w-full flex-col items-center justify-center rounded-2xl px-5 py-4 text-center"
          >
            <span className="shimmer-overlay absolute inset-0 rounded-2xl" />
            <span className="relative flex items-center justify-center gap-2 text-[15px] font-extrabold tracking-wide">
              <Lock className="h-4 w-4" />
              UNLOCK EXCLUSIVE CONTENT
              <ArrowRight className="h-4 w-4 animate-arrow-bounce" />
            </span>
            <span className="relative mt-1 text-[12px] font-medium text-white/85">
              Join my private world
            </span>
          </a>

          {/* Social grid */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <SocialButton icon={<Instagram className="h-4 w-4" />} label="Instagram" href="https://instagram.com" />
            <SocialButton icon={<Twitter className="h-4 w-4" />} label="X (Twitter)" href="https://x.com" />
            <SocialButton icon={<TikTokIcon className="h-4 w-4" />} label="TikTok" href="https://tiktok.com" />
            <SocialButton icon={<RedditIcon className="h-[18px] w-[18px]" />} label="Reddit" href="https://reddit.com" />
          </div>

          {/* Recent uploads */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Recent uploads
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { src: m1, label: "Mirror selfie" },
                { src: m2, label: "Beach morning" },
                { src: m3, label: "Late night" },
                { src: m4, label: "VIP set" },
                { src: m6, label: "Behind the scenes" },
                { src: m7, label: "Exclusive drop" },
              ].map((item, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 transition-all duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-lg active:scale-[0.98]"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src={item.src}
                      alt={item.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <ImageLightbox
              src={selectedImage.src}
              label={selectedImage.label}
              onClose={() => setSelectedImage(null)}
            />
          )}

          {/* Footer / live counter */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <LiveViewers />
            <p className="flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
              <Eye className="h-3 w-3" /> Sophie · Verified Creator
            </p>
          </div>
        </div>
      </div>

      <FakeToast />
    </main>
  );
}
