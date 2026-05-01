import { useNavigate, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header/Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="text-white font-bold text-2xl tracking-tight hover:text-blue-400 transition-colors">
            Gofer <span className="text-blue-600">AI</span>
          </Link>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="flex flex-col items-center justify-center px-4 py-12">
        {/* Tagline */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-white mb-1">Send us a message</h3>
          <p className="text-gray-500 text-sm mb-6">We'll get back to you as soon as possible</p>

          <ContactForm onSuccess={handleSuccess} onCancel={handleCancel} />
        </div>

        {/* Footer */}
        <p className="mt-8 text-gray-700 text-xs text-center">
          Gofer AI © 2026
        </p>
      </div>
    </div>
  );
}
