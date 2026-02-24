import { Link, useLocation } from 'react-router-dom';

export default function PageHeader() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div>
        <Link to="/" className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors">
          Gofer <span className="text-blue-500">AI</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
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
    </nav>
  );
}
