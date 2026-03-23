import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingVideo from '../assets/LandingPage.mp4';
import WaitlistForm from '../components/WaitlistForm';

export default function Landing() {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('[VIDEO] Autoplay successful');
            setVideoPlaying(true);
          })
          .catch(err => {
            console.log('[VIDEO] Autoplay prevented:', err);
            setVideoPlaying(false);
          });
      }
    };

    // Try to play on mount
    playVideo();

    // Add event listeners
    const handlePlay = () => setVideoPlaying(true);
    const handlePause = () => setVideoPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Try to play on user interaction (for mobile Safari)
    const handleUserInteraction = () => {
      if (video.paused) {
        playVideo();
      }
    };

    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().then(() => {
        setVideoPlaying(true);
      }).catch(err => {
        console.log('[VIDEO] Manual play failed:', err);
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          aria-hidden="true"
          onClick={handleVideoClick}
          // @ts-ignore - webkit prefix for older iOS
          webkit-playsinline="true"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        {/* Play button overlay for mobile when video is paused */}
        {!videoPlaying && (
          <button
            onClick={handleVideoClick}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-950/90 backdrop-blur-md z-10 transition-all hover:bg-gray-950/85 touch-manipulation"
            aria-label="Play background video"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/50 mb-4 hover:scale-110 active:scale-95 transition-transform">
              <svg
                className="w-12 h-12 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Tap to play background video</p>
          </button>
        )}

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
              onClick={() => setShowForm(false)}
              className="text-white font-bold text-3xl tracking-tight hover:text-blue-400 transition-colors"
            >
              Gofer <span className="text-blue-500">AI</span>
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
            <Link
              to="/demo-login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Demo Access
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <Link
              to="/demo-login"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Demo Access
            </Link>
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
                  onClick={() => {
                    setShowForm(false);
                    setMobileMenuOpen(false);
                  }}
                  className="text-white font-bold text-3xl tracking-tight hover:text-blue-400 transition-colors"
                >
                  Gofer <span className="text-blue-500">AI</span>
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
                <Link
                  to="/demo-login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Demo Access
                </Link>
              </div>
            </div>
          </div>
        )}


        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 w-full">
            {/* Headline with strong background on mobile */}
            <div className="space-y-4 bg-gray-950/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl p-6 md:p-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
                Gofer <span className="text-blue-400">AI</span>
              </h1>
              <p className="text-lg md:text-2xl text-white md:text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium md:font-normal">
                Building the Cognitive Layer Between Human Skill & Robotic Execution
              </p>
            </div>

            {/* Waitlist CTA - Enhanced for mobile */}
            <div className="max-w-2xl mx-auto w-full">
              {!showForm ? (
                <div className="space-y-4 bg-gray-950/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl p-6 md:p-0">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full max-w-md mx-auto block px-8 py-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xl md:text-lg font-bold rounded-xl transition-all shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 touch-manipulation border-2 border-blue-400/50"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    Request Demo Access
                  </button>
                  <p className="text-base md:text-sm text-white md:text-gray-400 text-center font-medium md:font-normal px-4">
                    Get early access to test Gofer AI with your robotics research
                  </p>
                </div>
              ) : (
                <div className="bg-gray-950/95 md:bg-gray-900/90 backdrop-blur-lg border border-gray-700 md:border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
                  <button
                    onClick={() => setShowForm(false)}
                    className="mb-4 text-base md:text-sm text-gray-300 md:text-gray-400 hover:text-white transition-colors font-medium"
                  >
                    ← Back
                  </button>
                  <WaitlistForm />
                </div>
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
              <Link to="/demo-login" className="hover:text-white md:hover:text-gray-400 transition-colors">
                Demo
              </Link>
              <Link to="/contact" className="hover:text-white md:hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
