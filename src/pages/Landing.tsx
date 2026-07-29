import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingVideo from '../assets/LandingPage.mp4';
import goferLogo from '/gofer-logo-square.png';
import { submitToWaitlist } from '../lib/waitlist';
import recordImg from '../assets/RecordFoldingLaundry.jpg';
import paymentImg from '../assets/PaymentConfirmation.jpeg';
import { DottedSurface } from '../components/ui/dotted-surface';
import { LogosCarousel } from '../components/ui/logos-carousel';
import linkedinIcon from '../assets/social/linkedin.png';
import githubIcon from '../assets/social/github.png';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          // Autoplay blocked — reveal the tap-to-play button
          overlay.style.opacity = '1';
          overlay.style.pointerEvents = 'auto';
        });
    };

    // Seamless manual loop — seek back 0.2s before end to avoid native loop flash/cut
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

  return (
    <div className="bg-gray-950 page-enter">
    {/* ── Hero ── */}
    <div className="relative min-h-screen overflow-hidden">
      <DottedSurface />
      {/* Full-screen video background */}
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

        {/* Play button overlay — shown only if autoplay is blocked */}
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

        {/* Dark overlay for readability - much stronger on mobile */}
        <div className="absolute inset-0 bg-gray-950/85 md:bg-gray-950/70 pointer-events-none" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Nav */}
        <nav className="px-6 py-4 flex items-center justify-between">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src={goferLogo}
                alt="Gofer AI"
                className="w-9 h-9 rounded-full shadow-lg shadow-blue-600/40"
              />
              <span className="text-white font-bold text-2xl tracking-tight">
                Gofer <span className="text-blue-600">AI</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/features"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              to="/documentation"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Docs
            </Link>
            <a
              href="/newsletter"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              Newsletter
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-gray-950/95 backdrop-blur-sm">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-800">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                >
                  <img src={goferLogo} alt="Gofer AI" className="w-9 h-9 rounded-full shadow-lg shadow-blue-600/40" />
                  <span className="text-white font-bold text-2xl tracking-tight">
                    Gofer <span className="text-blue-600">AI</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex-1 px-6 py-8 space-y-2">
                <Link
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/documentation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  Docs
                </Link>
                <a
                  href="/newsletter"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  Newsletter
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="px-6 py-6 border-t border-gray-800">
                <p className="text-center text-xs text-gray-500">Gofer AI &copy; 2026</p>
              </div>
            </div>
          </div>
        )}


        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-10 gap-8">

          {/* Logo + brand — centered above everything */}
          <div className="text-center space-y-3 bg-gray-950/75 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-2xl p-6 md:p-0">
            <div className="flex items-center justify-center">
              <img src={goferLogo} alt="Gofer AI" className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl shadow-blue-600/50" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
              Gofer <span className="text-blue-600">AI</span>
            </h1>
          </div>

          {/* Centered waitlist form */}
          <div className="w-full max-w-xl">
            {waitlistStatus === 'success' ? (
              <div className="text-center py-4">
                <p className="text-green-400 font-semibold text-lg">You're on the list!</p>
                <p className="text-gray-400 text-sm mt-1">We'll reach out when access opens up.</p>
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
                      setWaitlistError(result.error ?? 'Something went wrong. Try again.');
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
                    placeholder="Enter your email to join the waitlist"
                    className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm md:text-base px-4 outline-none"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  />
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading'}
                    className="flex-shrink-0 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 text-white text-sm font-semibold rounded-full transition-colors touch-manipulation whitespace-nowrap"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {waitlistStatus === 'loading' ? '...' : 'Join Waitlist'}
                  </button>
                </form>
                {waitlistStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-2">{waitlistError}</p>
                )}
              </>
            )}
          </div>

          {/* Get monetized — two-column below */}
          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-2">

            {/* Left: Value prop */}
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
                Get monetized doing{' '}
                <span className="text-blue-600">everyday tasks</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Film yourself doing chores, cooking, or any hands-on task. Gofer turns your recordings into training data for the next generation of robots — and pays you for every accepted submission.
              </p>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Learn how it works
                <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Right: Payment image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-800 group">
              <img
                src={paymentImg}
                alt="Earnings confirmation"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </main>
      </div>{/* end content layer */}
      {/* Gradient fade — blends hero into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-950 pointer-events-none z-20" />
    </div>{/* end hero overflow */}

    {/* ── Record Tasks + Logos — shared DottedSurface background ── */}
    <div className="relative z-10 bg-gray-950 overflow-hidden">
      <DottedSurface
        contained
        color={[30 / 255, 64 / 255, 175 / 255]}
        opacity={0.18}
        speed={0.04}
      />

      {/* Record Tasks */}
      <section id="how-it-works">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

          {/* Left: Image */}
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src={recordImg}
                alt="Recording an everyday task"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn delay={150} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Record yourself doing<br />everyday tasks
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Grab your phone and film yourself cooking, folding laundry, tidying — any hands-on task from your daily life. No special equipment or expertise needed.
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
              Learn more
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </FadeIn>

        </div>
      </section>

      {/* Logos carousel — flows into same animated background */}
      <div className="relative z-10 pb-16">
        <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8 font-medium">
          Powered by
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden">
          <LogosCarousel />
        </div>
      </div>
    </div>

    {/* ── Technology Deep Dive ── */}
    <section className="relative z-10 bg-gray-950 overflow-hidden px-6 py-24">
      <DottedSurface
        contained
        color={[30 / 255, 64 / 255, 175 / 255]}
        opacity={0.22}
        speed={0.04}
      />
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <FadeIn className="text-center mb-16">
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-widest mb-3">The Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Gofer <span className="text-blue-600">AI</span> Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Gofer turns everyday task recordings into structured motion data — the fuel that teaches physical AI to operate in the real world.
            </p>
          </FadeIn>

          {/* Pipeline blocks */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
              {
                delay: 0,
                accent: 'blue',
                icon: (
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                step: 'Step 1',
                title: 'Action Detection',
                body: 'Vision AI breaks each video into discrete action primitives — reach, grasp, move, place — with timestamps and confidence scores.',
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
                step: 'Step 2',
                title: 'Semantic Search',
                body: 'Videos are embedded into a vector space. Researchers query in plain language to find matching demonstrations across the entire dataset instantly.',
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
                step: 'Step 3',
                title: 'Robot Instructions',
                body: 'Action sequences become robot-ready output — motion trajectories and task graphs compatible with standard robotics frameworks.',
              },
            ].map(({ delay, accent, icon, step, title, body }) => {
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
                    {/* top glow streak */}
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

          {/* Research blocks */}
          <FadeIn className="mb-12">
            <h3 className="text-xl font-bold text-white text-center mb-2">The Research Behind It</h3>
            <p className="text-center text-gray-500 text-sm">Built on the frontier of imitation learning and embodied AI.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: 'Imitation Learning',
                title: 'Learning from Human Demonstrations',
                body: 'Robots trained on real human demonstrations generalise far better than those trained on synthetic data. Gofer provides the demonstration scale that makes this possible.',
                delay: 0,
                icon: (
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                tag: 'Embodied AI',
                title: 'Bridging Vision and Physical Action',
                body: "Gofer converts raw video into structured action data — hand pose, keypoints, interaction graphs — ready for embodied AI systems to train policies.",
                delay: 100,
                icon: (
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
              {
                tag: 'Data Quality',
                title: 'Why Human-Recorded Data Matters',
                body: "Real-world recordings capture diversity that synthetic data can't — varied lighting, surfaces, and technique. That breadth is exactly what robots need in deployment.",
                delay: 200,
                icon: (
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                tag: 'Dataset Licensing',
                title: 'From Contributors to Frontier Labs',
                body: 'Accepted videos are licensed to robotics labs, AI companies, and universities. Every contributor whose submission is licensed gets a flat payout.',
                delay: 300,
                icon: (
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ tag, title, body, delay, icon }) => (
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

      {/* ── Footer ── */}
      <footer className="relative z-10 bg-gray-950 px-6 pt-12 pb-8">
        {/* Logo centered */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <img src={goferLogo} alt="Gofer AI" className="w-10 h-10 rounded-full shadow-lg shadow-blue-600/30" />
          <span className="text-white font-semibold text-lg tracking-tight">
            Gofer <span className="text-blue-600">AI</span>
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy</Link>
          <Link to="/contributor-terms" className="hover:text-gray-300 transition-colors">Contributor Terms</Link>
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-800/60 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
          <p className="text-xs text-gray-600">© Gofer AI 2026</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/gofer-ai" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-90 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 object-contain" />
            </a>
            <a href="https://github.com/goferaispace" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-90 transition-opacity">
              <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      </footer>

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
