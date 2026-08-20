import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'en', label: 'EN', flag: '/enflag.png', alt: 'English flag' },
  { code: 'es', label: 'ES', flag: '/esflag.svg', alt: 'Bandera de Espana' },
] as const;

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const active = i18n.language?.startsWith('es') ? LANGS[1] : LANGS[0];

  return (
    <div className="relative inline-block group ml-1">
      <button
        type="button"
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 rounded-[14px] px-2 py-1 text-white text-xs font-semibold leading-none transition-colors"
      >
        <img src={active.flag} alt="Language flag" className="w-[18px] rounded-sm object-contain" style={{ aspectRatio: '3 / 2' }} />
        <span>{active.label}</span>
        <span className="text-[10px] text-gray-400 transition-transform group-hover:rotate-180">&#9662;</span>
      </button>
      <div
        role="menu"
        className="absolute top-full right-0 mt-1 min-w-[72px] flex flex-col gap-0.5 p-1 rounded-[10px] border border-white/10 bg-[rgba(12,16,26,0.96)] backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all z-[1000]"
      >
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            role="menuitem"
            onClick={() => i18n.changeLanguage(l.code)}
            className="flex items-center gap-1.5 w-full bg-transparent hover:bg-blue-500/25 text-gray-400 hover:text-white text-xs font-medium px-2.5 py-1.5 rounded-md text-left transition-colors"
          >
            <img src={l.flag} alt={l.alt} className="w-[18px] rounded-sm object-contain" style={{ aspectRatio: '3 / 2' }} />
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}
