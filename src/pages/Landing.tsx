import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import landingVideo from '../assets/LandingPage.mp4';
import goferLogo from '/gofer-logo-square.png';
import { submitToWaitlist } from '../lib/waitlist';
import homeWorkImg from '../assets/home 2.png';
import homeHeroImg from '../assets/home1.png';
import { DottedSurface } from '../components/ui/dotted-surface';
import { LogosCarousel } from '../components/ui/logos-carousel';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Landing() {
  const { t } = useTranslation();
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistError, setWaitlistError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    const tryPlay = () => {
      video.play()
        .then(() => {
          overlay.style.opacity = '0';
          overlay.style.pointerEvents = 'none';
        })
        .catch(() => {
          overlay.style.opacity = '1';
          overlay.style.pointerEvents = 'auto';
        });
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.2) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    tryPlay();

    const unlock = () => { if (video.paused) tryPlay(); };
    document.addEventListener('touchstart', unlock, { once: true });
    document.addEventListener('click', unlock, { once: true });

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('click', unlock);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (video && overlay && video.paused) {
      video.play().then(() => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
      }).catch(() => {});
    }
  };

  const pipeline = [
    {
      delay: 0,
      accent: 'blue',
      icon: (
        <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      step: t('landing.tech.step1Step'),
      title: t('landing.tech.step1Title'),
      body: t('landing.tech.step1Body'),
    },
    {
      delay: 120,
      accent: 'purple',
      icon: (
        <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      step: t('landing.tech.step2Step'),
      title: t('landing.tech.step2Title'),
      body: t('landing.tech.step2Body'),
    },
    {
      delay: 240,
      accent: 'green',
      icon: (
        <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      step: t('landing.tech.step3Step'),
      title: t('landing.tech.step3Title'),
      body: t('landing.tech.step3Body'),
    },
  ];

  const research = [
    {
      tag: t('landing.tech.r1Tag'),
      title: t('landing.tech.r1Title'),
      body: t('landing.tech.r1Body'),
      delay: 0,
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      tag: t('landing.tech.r2Tag'),
      title: t('landing.tech.r2Title'),
      body: t('landing.tech.r2Body'),
      delay: 100,
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      tag: t('landing.tech.r3Tag'),
      title: t('landing.tech.r3Title'),
      body: t('landing.tech.r3Body'),
      delay: 200,
      icon: (
        <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      tag: t('landing.tech.r4Tag'),
      title: t('landing.tech.r4Title'),
      body: t('landing.tech.r4Body'),
      delay: 300,
      icon: (
        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-950 page-enter">
    <SiteHeader />
    {/* Hero */}
    <div className="relative min-h-screen overflow-hidden">
      <DottedSurface />
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%', willChange: 'transform' }}
          aria-hidden="true"
          // @ts-ignore
          webkit-playsinline="true"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        <div
          ref={overlayRef}
          onClick={handleVideoClick}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-950/90 backdrop-blur-md z-10 cursor-pointer touch-manipulation"
          style={{ opacity: 0, pointerEvents: 'none', transition: 'opacity 0.6s ease', WebkitTapHighlightColor: 'transparent' }}
          aria-label="Play background video"
        >
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/50 mb-4 hover:scale-110 active:scale-95 transition-transform">
            <svg className="w-12 h-12 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white text-sm font-medium">Tap to play</p>
        </div>

        <div className="absolute inset-0 bg-gray-950/85 md:bg-gray-950/70 pointer-events-none" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-10 gap-8">

          <div className="text-center space-y-3 bg-gray-950/75 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-6 md:p-0">
            <div className="flex items-center justify-center">
              <img src={goferLogo} alt="Gofer AI" className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl shadow-blue-600/50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
              Gofer <span className="text-blue-600">AI</span>
            </h1>
          </div>

          <div className="w-full max-w-xl">
            {waitlistStatus === 'success' ? (
              <div className="text-center py-4">
                <p className="text-green-400 font-semibold text-lg">{t('landing.waitlist.successTitle')}</p>
                <p className="text-gray-400 text-sm mt-1">{t('landing.waitlist.successBody')}</p>
              </div>
            ) : (
              <>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setWaitlistStatus('loading');
                    setWaitlistError('');
                    const result = await submitToWaitlist(waitlistEmail);
                    if (result.success) {
                      setWaitlistStatus('success');
                      setWaitlistEmail('');
                    } else {
                      setWaitlistStatus('error');
                      setWaitlistError(result.error ?? t('landing.waitlist.error'));
                    }
                  }}
                  className="flex items-center bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full px-2 py-2 shadow-2xl focus-within:border-blue-600 transition-colors"
                >
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => {
                      setWaitlistEmail(e.target.value);
                      if (waitlistStatus === 'error') setWaitlistStatus('idle');
                    }}
                    id="waitlist-email"
                    placeholder={t('landing.waitlist.placeholder')}
                    className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm md:text-base px-4 outline-none"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  />
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading'}
                    className="flex-shrink-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 text-white text-sm font-semibold rounded-full transition-colors touch-manipulation whitespace-nowrap"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {waitlistStatus === 'loading' ? '...' : t('landing.waitlist.submit')}
                  </button>
                </form>
                {waitlistStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-2">{waitlistError}</p>
                )}
              </>
            )}
          </div>

          {/* Value prop — two-column */}
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-2">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
                {t('landing.hero.valueLead')}{' '}
                <span className="text-blue-600">{t('landing.hero.valueHighlight')}</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {t('landing.hero.valueBody')}
              </p>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {t('landing.hero.learnHow')}
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-800 group">
              <img
                src={homeHeroImg}
                alt={t('landing.hero.imageAlt')}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-950 pointer-events-none z-20" />
    </div>

    {/* Work + Logos */}
    <div className="relative z-10 bg-gray-950 overflow-hidden">
      <DottedSurface
        contained
        color={[30 / 255, 64 / 255, 175 / 255]}
        opacity={0.18}
        speed={0.04}
      />

      <section id="how-it-works">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={homeWorkImg}
                alt={t('landing.work.imageAlt')}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

          <FadeIn delay={150} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {t('landing.work.title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {t('landing.work.body')}
            </p>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  const input = document.getElementById('waitlist-email') as HTMLInputElement | null;
                  input?.focus();
                }, 700);
              }}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
            >
              {t('landing.work.learnMore')}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-10 pb-16">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8 font-medium">
          {t('landing.tech.poweredBy')}
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden">
          <LogosCarousel />
        </div>
      </div>
    </div>

    {/* Technology Deep Dive */}
    <section className="relative z-10 bg-gray-950 overflow-hidden px-6 py-24">
      <DottedSurface
        contained
        color={[30 / 255, 64 / 255, 175 / 255]}
        opacity={0.22}
        speed={0.04}
      />
        <div className="max-w-5xl mx-auto">

          <FadeIn className="text-center mb-16">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-widest mb-3">{t('landing.tech.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('landing.tech.titlePre')} Gofer <span className="text-blue-600">AI</span> {t('landing.tech.titlePost')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('landing.tech.intro')}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {pipeline.map(({ delay, accent, icon, step, title, body }) => {
              const ringColor =
                accent === 'blue' ? 'ring-blue-600/20 hover:ring-blue-500/50 shadow-blue-900/20'
                : accent === 'purple' ? 'ring-purple-600/20 hover:ring-purple-500/50 shadow-purple-900/20'
                : 'ring-green-600/20 hover:ring-green-500/50 shadow-green-900/20';
              const iconBg =
                accent === 'blue' ? 'bg-blue-600/15'
                : accent === 'purple' ? 'bg-purple-600/15'
                : 'bg-green-600/15';
              const stepColor =
                accent === 'blue' ? 'text-blue-500'
                : accent === 'purple' ? 'text-purple-500'
                : 'text-green-500';
              const gradFrom =
                accent === 'blue' ? 'from-blue-950/40'
                : accent === 'purple' ? 'from-purple-950/40'
                : 'from-green-950/40';
              return (
                <FadeIn key={title} delay={delay}>
                  <div className={`group relative bg-gradient-to-br ${gradFrom} to-gray-900 ring-1 ${ringColor} rounded-2xl p-7 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                    <div className={`absolute top-0 left-8 right-8 h-px ${accent === 'blue' ? 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' : accent === 'purple' ? 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' : 'bg-gradient-to-r from-transparent via-green-500/50 to-transparent'}`} />
                    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-5 ring-1 ${ringColor}`}>
                      {icon}
                    </div>
                    <span className={`text-xs font-semibold ${stepColor} uppercase tracking-widest`}>{step}</span>
                    <h3 className="text-lg font-bold text-white mt-1.5 mb-3">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn className="mb-12">
            <h3 className="text-xl font-bold text-white text-center mb-2">{t('landing.tech.researchTitle')}</h3>
            <p className="text-center text-gray-500 text-sm">{t('landing.tech.researchSubtitle')}</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {research.map(({ tag, title, body, delay, icon }) => (
              <FadeIn key={tag} delay={delay}>
                <div className="group flex gap-5 items-start bg-gray-900/60 hover:bg-gray-900/90 ring-1 ring-gray-800 hover:ring-blue-600/30 rounded-2xl p-6 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-800 ring-1 ring-gray-700 rounded-xl flex items-center justify-center mt-0.5 group-hover:ring-blue-600/40 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">{tag}</span>
                    <h4 className="text-base font-bold text-white mt-1 mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(28px)',
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      {children}
    </div>
  );
}
