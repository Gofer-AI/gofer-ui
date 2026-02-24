import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import landingVideo from '../assets/LandingPage.mp4';
import WaitlistForm from '../components/WaitlistForm';

export default function Landing() {
  const [showForm, setShowForm] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play on mount
      video.play().catch(err => {
        console.log('[VIDEO] Autoplay prevented, retrying...', err);
        // Retry after a short delay
        setTimeout(() => {
          video.play().catch(e => console.log('[VIDEO] Retry failed:', e));
        }, 500);
      });
    }
  }, []);

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
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          aria-hidden="true"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Nav */}
        <nav className="px-6 py-4 flex items-center justify-between">
          <div>
            <Link to="/" className="text-white font-bold text-3xl tracking-tight hover:text-blue-400 transition-colors">
              Gofer <span className="text-blue-500">AI</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/features"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors hidden md:block"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors hidden md:block"
            >
              About
            </Link>
            <Link
              to="/documentation"
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors hidden md:block"
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
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Gofer <span className="text-blue-500">AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Building the Cognitive Layer Between Human Skill & Robotic Execution
              </p>
            </div>

            {/* Waitlist CTA */}
            <div className="max-w-2xl mx-auto">
              {!showForm ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowForm(true)}
                    className="w-full max-w-md mx-auto block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                  >
                    Request Demo Access
                  </button>
                  <p className="text-sm text-gray-400 text-center">
                    Get early access to test Gofer AI with your robotics research
                  </p>
                </div>
              ) : (
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <WaitlistForm />
                </div>
              )}
            </div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-left">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Action Detection</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Advanced vision AI analyzes human demonstrations to identify precise action primitives and object interactions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-left">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Semantic Search</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Find relevant demonstrations using natural language queries powered by multimodal embeddings.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-left">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Robot Instructions</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automatically generate executable robot commands from analyzed human demonstrations.
                </p>
              </div>
            </div>

          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-6 text-center border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span>Gofer AI © 2026</span>
              <a href="https://github.com/Gofer-AI" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                GitHub
              </a>
              <Link to="/demo-login" className="hover:text-gray-400 transition-colors">
                Demo
              </Link>
              <a href="mailto:contact@gofer-ai.com" className="hover:text-gray-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
