import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import Landing from './pages/Landing';
import About from './pages/About';
import Features from './pages/Features';
import Documentation from './pages/Documentation';
import LabLabDemo from './components/LabLabDemo';
import ProfileMenu from './components/ProfileMenu';
import { ErrorBoundaryWithLogging } from './components/ErrorBoundary';
import { getLoggedInUser } from './lib/auth';
import { AppProvider, VideoProvider, SearchProvider } from './context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

// Auth guard - redirects to demo-login if not logged in
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = getLoggedInUser();
  if (!user) return <Navigate to="/demo-login" replace />;
  return <>{children}</>;
}

// Main app layout with dark navbar
function AppLayout() {
  const user = getLoggedInUser()!;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Top Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div>
          <Link to="/" className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors">
            Gofer <span className="text-blue-500">AI</span>
          </Link>
          <p className="text-xs text-gray-500 mt-1 hidden sm:block">
            Building the Cognitive Layer Between Human Skill & Robotic Execution
          </p>
        </div>
        <ProfileMenu username={user} />
      </nav>

      {/* Main Content */}
      <LabLabDemo />
    </div>
  );
}

/**
 * AppRouter Component
 *
 * Main application router with context providers and authentication.
 * Manages application routing, state management, and server state.
 *
 * Provider hierarchy:
 * 1. ErrorBoundaryWithLogging - Catch and handle React errors
 * 2. QueryClientProvider - React Query for server state
 * 3. AppProvider - Application-level state (mode, errors)
 * 4. VideoProvider - Video upload and processing state
 * 5. SearchProvider - Search query and results state
 * 6. BrowserRouter - Client-side routing
 */
export default function AppRouter() {
  return (
    <ErrorBoundaryWithLogging>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <VideoProvider>
            <SearchProvider>
              <BrowserRouter>
                <Routes>
                  {/* Public landing page */}
                  <Route path="/" element={<Landing />} />

                  {/* Public info pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/documentation" element={<Documentation />} />

                  {/* Hidden demo login */}
                  <Route path="/demo-login" element={<Login />} />

                  {/* Protected demo app */}
                  <Route
                    path="/app"
                    element={
                      <ProtectedRoute>
                        <AppLayout />
                      </ProtectedRoute>
                    }
                  />

                  {/* Catch all - redirect to landing */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </BrowserRouter>
            </SearchProvider>
          </VideoProvider>
        </AppProvider>
      </QueryClientProvider>
    </ErrorBoundaryWithLogging>
  );
}
