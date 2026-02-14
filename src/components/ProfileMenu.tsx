import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../lib/auth';

interface ProfileMenuProps {
  username: string;
}

export default function ProfileMenu({ username }: ProfileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors"
      >
        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
          {username.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm text-gray-300">{username}</span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
          {/* User info */}
          <div className="px-4 py-3 border-b border-gray-800">
            <p className="text-xs text-gray-500">Signed in as</p>
            <p className="text-sm font-medium text-white truncate">{username}</p>
          </div>

          {/* Menu items */}
          <div className="py-1">
            <div className="px-4 py-2">
              <span className="text-xs text-gray-600 uppercase tracking-wider">Demo Mode</span>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
