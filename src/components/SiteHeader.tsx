import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';
import goferLogo from '/gofer-logo-square.png';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-[13.5px] font-medium transition-colors ${
      isActive(path) ? 'text-blue-500 font-semibold' : 'text-gray-400 hover:text-white'
    }`;

  return (
    <>
      <nav className="relative z-[100] w-full bg-[rgba(6,9,19,0.92)] backdrop-blur-[10px] border-b border-white/[0.07] py-3 sticky top-0">
        <div className="max-w-[1100px] mx-auto px-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-white font-bold text-[15.5px]">
            <img src={goferLogo} alt="Gofer AI Logo" className="w-6 h-6 object-contain" />
            <span>
              Gofer <span className="text-blue-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-[26px]">
            <Link to="/" className={linkClass('/')}>{t('nav.home')}</Link>
            <Link to="/about" className={linkClass('/about')}>{t('nav.about')}</Link>
            <Link to="/features" className={linkClass('/features')}>{t('nav.technology')}</Link>
            <a href="/newsletter" className="text-[13.5px] font-medium text-gray-400 hover:text-white transition-colors">{t('nav.newsletter')}</a>
            <a href="/blog" className="text-[13.5px] font-medium text-gray-400 hover:text-white transition-colors">{t('nav.blog')}</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 pl-5 pr-4 py-2 border border-blue-500/60 hover:bg-blue-600 hover:border-blue-600 text-white text-sm font-semibold rounded-full transition-colors"
            >
              {t('cta.partnerWithUs')}
              <svg className="w-4 h-4 text-blue-400 group-hover:text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <LangSwitcher />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-3">
            <LangSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-[#060913]/97 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="bg-[rgba(6,9,19,0.92)] border-b border-white/[0.07] px-5 py-3 flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-white font-bold text-[15.5px]"
              >
                <img src={goferLogo} alt="Gofer AI Logo" className="w-6 h-6 object-contain" />
                <span>
                  Gofer <span className="text-blue-600">AI</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 px-6 py-8 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/') ? 'text-white bg-blue-600/20 font-medium' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/about') ? 'text-white bg-blue-600/20 font-medium' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/features') ? 'text-white bg-blue-600/20 font-medium' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {t('nav.technology')}
              </Link>
              <a
                href="/newsletter"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg rounded-lg transition-colors text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                {t('nav.newsletter')}
              </a>
              <a
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg rounded-lg transition-colors text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                {t('nav.blog')}
              </a>
            </div>

            <div className="px-6 py-6 border-t border-white/[0.07]">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {t('cta.partnerWithUs')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
