import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingVideo from '../assets/LandingPage.mp4';
import goferLogo from '/gofer-logo-square.png';
import { submitToWaitlist } from '../lib/waitlist';

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
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
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

        {/* Play button overlay — hidden via ref (no React state = no re-render interrupting video) */}
        <div
          ref={overlayRef}
          onClick={handleVideoClick}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-950/90 backdrop-blur-md z-10 cursor-pointer touch-manipulation"
          style={{ opacity: 1, transition: 'opacity 0.6s ease', WebkitTapHighlightColor: 'transparent' }}
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
        <main className="flex-1 flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 w-full">
            {/* Headline with strong background on mobile */}
            <div className="space-y-4 bg-gray-950/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl p-6 md:p-0">
              <div className="flex items-center justify-center gap-4 mb-2">
                <img
                  src={goferLogo}
                  alt="Gofer AI"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl shadow-blue-600/50"
                />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                Gofer <span className="text-blue-600">AI</span>
              </h1>
              <p className="text-lg md:text-2xl text-white md:text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium md:font-normal">
                Building the Cognitive Layer Between Human Skill & Robotic Execution
              </p>
            </div>

            {/* Waitlist CTA */}
            <div className="max-w-xl mx-auto w-full px-2">
              {waitlistStatus === 'success' ? (
                <div className="text-center py-4">
                  <p className="text-green-400 font-medium text-lg">You're on the list!</p>
                  <p className="text-gray-400 text-sm mt-1">We'll reach out when access opens up.</p>
                </div>
              ) : (
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
              )}
              {waitlistStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-3">{waitlistError}</p>
              )}
            </div>

            {/* Feature Highlights - Enhanced mobile contrast */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-gray-950/90 md:bg-gray-900/60 backdrop-blur-md border border-gray-700 md:border-gray-800 rounded-xl p-5 md:p-6 text-left shadow-xl">
                <div className="w-14 h-14 md:w-12 md:h-12 bg-blue-600/30 md:bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 md:w-6 md:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-lg font-bold md:font-semibold text-white mb-2">Action Detection</h3>
                <p className="text-sm text-gray-200 md:text-gray-400 leading-relaxed">
                  Advanced vision AI analyzes human demonstrations to identify precise action primitives and object interactions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-950/90 md:bg-gray-900/60 backdrop-blur-md border border-gray-700 md:border-gray-800 rounded-xl p-5 md:p-6 text-left shadow-xl">
                <div className="w-14 h-14 md:w-12 md:h-12 bg-blue-600/30 md:bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 md:w-6 md:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-lg font-bold md:font-semibold text-white mb-2">Semantic Search</h3>
                <p className="text-sm text-gray-200 md:text-gray-400 leading-relaxed">
                  Find relevant demonstrations using natural language queries powered by multimodal embeddings.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-950/90 md:bg-gray-900/60 backdrop-blur-md border border-gray-700 md:border-gray-800 rounded-xl p-5 md:p-6 text-left shadow-xl">
                <div className="w-14 h-14 md:w-12 md:h-12 bg-blue-600/30 md:bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 md:w-6 md:h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-lg font-bold md:font-semibold text-white mb-2">Robot Instructions</h3>
                <p className="text-sm text-gray-200 md:text-gray-400 leading-relaxed">
                  Automatically generate executable robot commands from analyzed human demonstrations.
                </p>
              </div>
            </div>

          </div>
        </main>

        {/* Footer - Enhanced mobile visibility */}
        <footer className="px-6 py-6 text-center border-t border-gray-700 md:border-gray-800/50 bg-gray-950/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 md:text-gray-500">
              <span>Gofer AI © 2026</span>
              <a href="https://github.com/Gofer-AI" target="_blank" rel="noopener noreferrer" className="hover:text-white md:hover:text-gray-400 transition-colors">
                GitHub
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="hover:text-white md:hover:text-gray-400 transition-colors"
              >
                Join Waitlist
              </button>
              <Link to="/contact" className="hover:text-white md:hover:text-gray-400 transition-colors">
                Contact
              </Link>
              <Link to="/privacy-policy" className="hover:text-white md:hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contributor-terms" className="hover:text-white md:hover:text-gray-400 transition-colors">
                Contributor Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
