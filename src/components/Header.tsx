import { useEffect, useState } from 'react';
import { checkAPIStatus } from '../api/client';

export default function Header() {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      const status = await checkAPIStatus();
      setIsOnline(status);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gofer AI</h1>
            <p className="text-sm text-gray-600">Semantic Video Search for Creators</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">API Status:</span>
            {isOnline === null ? (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                Checking...
              </span>
            ) : isOnline ? (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                Online
              </span>
            ) : (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                Offline
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
