import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDetailPage =
    typeof window !== "undefined" &&
    (window.location.hash.startsWith("#/robotics/") ||
      window.location.hash.startsWith("#/digital/") ||
      window.location.hash.startsWith("#/human-capital/"));
  const useSolidNavbar = scrolled || isDetailPage;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        useSolidNavbar
          ? "border-b border-white/15 bg-[#061a3fcc]/90 shadow-[0_18px_60px_rgba(5,16,40,0.26)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 lg:px-8">
        <a href="#beranda" className="flex min-w-0 items-center gap-3">
          <div className="flex h-[5.2rem] w-[5.2rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/92 shadow-lg lg:h-[6.2rem] lg:w-[6.2rem]">
            <img
              src="/assets/cis-logo-new.png"
              alt="CIS"
              className="h-[6.6rem] w-[6.6rem] max-w-none translate-x-[0.16rem] object-contain scale-[1.22] lg:h-[7.8rem] lg:w-[7.8rem] lg:translate-x-[0.18rem] lg:scale-[1.24]"
            />
          </div>
          <div className="min-w-0 leading-tight text-white">
            <strong className="block text-[0.62rem] font-semibold tracking-[0.2em] text-white/70 sm:text-sm sm:tracking-[0.18em]">
              COLLABORATIVE
            </strong>
            <span className="block text-sm font-semibold text-white sm:text-base">
              Integrated Solutions
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-white/82 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#f0c45a]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden rounded-full border border-[#f0c45a]/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:border-[#f0c45a] hover:bg-white/15 lg:inline-flex"
        >
          Konsultasi Sekarang
        </a>

        <button
          type="button"
          className="inline-flex shrink-0 rounded-full border border-white/15 bg-white/10 p-3 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#071a3b]/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-4 text-base text-white/88">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                className="mt-2 inline-flex justify-center rounded-full bg-[#f0c45a] px-5 py-3 font-semibold text-[#07204b]"
                onClick={() => setOpen(false)}
              >
                Konsultasi Sekarang
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
