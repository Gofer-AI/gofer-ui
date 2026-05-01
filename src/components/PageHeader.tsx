import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div>
          <Link to="/" className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors">
            Gofer <span className="text-blue-600">AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm transition-colors ${
              isActive('/') ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Home
          </Link>
          <Link
            to="/features"
            className={`text-sm transition-colors ${
              isActive('/features') ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Features
          </Link>
          <Link
            to="/about"
            className={`text-sm transition-colors ${
              isActive('/about') ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            About
          </Link>
          <Link
            to="/documentation"
            className={`text-sm transition-colors ${
              isActive('/documentation') ? 'text-blue-400 font-medium' : 'text-gray-400 hover:text-gray-300'
            }`}
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
            <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors"
              >
                Gofer <span className="text-blue-600">AI</span>
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
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/')
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/features')
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Features
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/about')
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                About
              </Link>
              <Link
                to="/documentation"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/documentation')
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                Docs
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                  isActive('/contact')
                    ? 'text-white bg-blue-600/20 font-medium'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
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
    </>
  );
}
