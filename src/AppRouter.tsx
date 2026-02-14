import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import LabLabDemo from './components/LabLabDemo';
import ProfileMenu from './components/ProfileMenu';
import { getLoggedInUser } from './lib/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 1 },
  },
});

// Auth guard - redirects to login if not logged in
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = getLoggedInUser();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

// Main app layout with dark navbar
function AppLayout() {
  const user = getLoggedInUser()!;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Top Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div>
          <span className="text-white font-bold text-lg tracking-tight">
            Gofer <span className="text-blue-500">AI</span>
          </span>
          <span className="ml-3 text-xs text-gray-600 hidden sm:inline">
            Building the Cognitive Layer Between Human Skill & Robotic Execution
          </span>
        </div>
        <ProfileMenu username={user} />
      </nav>

      {/* Main Content */}
      <LabLabDemo />
    </div>
  );
}

export default function AppRouter() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
