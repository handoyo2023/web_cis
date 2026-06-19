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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/15 bg-[#061a3fcc]/90 shadow-[0_18px_60px_rgba(5,16,40,0.26)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#beranda" className="flex items-center gap-3">
          <div className="flex h-[4.7rem] w-[4.7rem] items-center justify-center rounded-full bg-white/92 shadow-lg">
            <img
              src="/assets/cis-logo-new.png"
              alt="CIS"
              className="h-[4.95rem] w-[4.95rem] object-contain scale-[1.16]"
            />
          </div>
          <div className="hidden leading-tight text-white sm:block">
            <strong className="block text-sm font-semibold tracking-[0.18em] text-white/70">
              COLLABORATIVE
            </strong>
            <span className="block text-base font-semibold">Integrated Solutions</span>
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
          className="inline-flex rounded-full border border-white/15 bg-white/10 p-3 text-white lg:hidden"
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
