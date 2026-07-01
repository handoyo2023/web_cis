import { footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#05132d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-[5rem] w-[5rem] items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
              <img
                src="/assets/cis-logo-new.png"
                alt="CIS"
                className="h-[6.35rem] w-[6.35rem] max-w-none object-contain scale-[1.22]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">Collaborative</p>
              <p className="text-lg font-semibold">Integrated Solutions</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
            PT Collaborative Integrated Solutions membantu organisasi menavigasi transformasi melalui sinergi
            konsultasi strategis, desain operasional, teknologi, dan pengembangan manusia.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Quick Links</p>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-[#f0c45a]">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Contact</p>
          <div className="mt-5 space-y-3 text-slate-300">
            <p>support@ciscorp.co.id</p>
            <p>Telp :(021)3951 6622</p>
            <p>WhatsApp: +62 851 9939 0093</p>
            <p>
              APL Tower Central Park Lt. 26 Unit 05
              <br />
              Letjen S. Parman Kav. No.28,  
              <br />
              Jakarta Barat, Jakarta 11440
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/55 lg:px-8">
        Copyright (c) 2026 PT Collaborative Integrated Solutions. All rights reserved.
      </div>
    </footer>
  );
}
