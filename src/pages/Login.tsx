import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/auth';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await loginUser(username, password, accessCode);

    if (result.success) {
      navigate('/app');
    } else {
      setError(result.error || 'Login failed.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <SiteHeader />

      {/* Login Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Tagline */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Demo Access
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Building the Cognitive Layer Between Human Skill & Robotic Execution
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-sm bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-white mb-1">Sign In</h3>
          <p className="text-gray-500 text-sm mb-6">Enter your demo credentials to continue</p>

          {error && (
            <div className="mb-4 p-3 bg-red-950 border border-red-800 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Access Code */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">
                Demo Access Code
              </label>
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter access code"
                required
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                'Access Demo'
              )}
            </button>
          </form>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
