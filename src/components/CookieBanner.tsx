import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CONSENT_KEY = 'gofer_cookie_consent';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem(CONSENT_KEY);
    } catch {
      return false;
    }
  });

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // localStorage unavailable (private mode); dismiss for this session only
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t('cookie.ariaLabel')}
      className="fixed left-1/2 bottom-5 z-[9999] flex w-[calc(100%-32px)] max-w-[760px] -translate-x-1/2 flex-col gap-3 rounded-2xl border border-gray-800 bg-gray-900/95 px-5 py-4 text-sm text-gray-300 shadow-2xl sm:flex-row sm:items-center sm:gap-4"
    >
      <p className="m-0 flex-1">
        {t('cookie.message')}{' '}
        <Link
          to="/privacy-policy"
          className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
        >
          {t('cookie.learnMore')}
        </Link>
      </p>
      <button
        type="button"
        onClick={accept}
        className="w-full shrink-0 rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
      >
        {t('cookie.accept')}
      </button>
    </div>
  );
}
