import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-body tracking-[0.12em] opacity-50 ${className}`}>{children}</p>
  );
}

export function Section({
  children, id, tone = "paper", className = "",
}: { children: ReactNode; id?: string; tone?: "paper" | "cream" | "ink"; className?: string }) {
  const bg = tone === "cream" ? "bg-cream text-ink" : tone === "ink" ? "bg-ink text-white" : "bg-paper text-ink";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="shell py-24 md:py-32">{children}</div>
    </section>
  );
}

export function Button({
  href, children, variant = "solid",
}: { href: string; children: ReactNode; variant?: "solid" | "outline" | "light" }) {
  const styles = {
    solid: "bg-ink text-white hover:opacity-85",
    outline: "border border-[var(--ink-20)] text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:opacity-85",
  }[variant];
  return (
    <Link href={href} className={`inline-block rounded-full px-6 py-4 text-body transition-all duration-300 ${styles}`}>
      {children}
    </Link>
  );
}

/** Sized placeholder standing in for imagery until real files are added. */
export function MediaSlot({
  ratio = "4 / 3", label, className = "",
}: { ratio?: string; label?: string; className?: string }) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className={`flex w-full items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(16,16,16,0.06),rgba(16,16,16,0.02))] ${className}`}
    >
      {label && <span className="text-body tracking-[0.12em] opacity-30">{label}</span>}
    </div>
  );
}
