const LINKS = [
  { label: "À propos", href: "#about" },
  { label: "Expertises", href: "#expertises" },
  { label: "Projets", href: "#projets" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/adediranyacoub" },
  { label: "WhatsApp", href: "https://wa.me/2290156514346" },
  { label: "Email", href: "mailto:contact@adediranyacoub.com" },
];

export const SiteFooter = () => {
  return (
    <footer className="border-t border-black/8 bg-[#f8f5ee] px-5 py-12 android-sm:px-8 ipad:px-12 desktop-sm:px-[130px]">
      <div className="mx-auto flex w-full max-w-[1252px] flex-col gap-10">
        <div className="flex flex-col gap-8 ipad:flex-row ipad:items-start ipad:justify-between">
          <div>
            <a
              href="#top"
              className="font-redhat text-[28px] font-bold tracking-[-0.6px] text-black"
            >
              / AY
            </a>
            <p className="mt-3 max-w-[32ch] font-sans text-[14px] leading-relaxed text-black/45">
              Adediran Yacoub — monteur vidéo freelance, photographe et créateur
              d&apos;agents IA.
            </p>
          </div>

          <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center font-redhat text-[15px] font-semibold text-black/70 transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            {SOCIALS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex min-h-11 items-center font-redhat text-[15px] font-semibold text-black/70 transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/8 pt-6 ipad:flex-row ipad:items-center ipad:justify-between">
          <p className="font-sans text-[13px] text-black/40">
            © {new Date().getFullYear()} Adediran Yacoub. Tous droits réservés.
          </p>
          <p className="font-sans text-[13px] text-black/40">
            Abomey-Calavi · Lagos · Remote international
          </p>
        </div>
      </div>
    </footer>
  );
};
