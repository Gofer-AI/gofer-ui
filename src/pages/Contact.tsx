import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Contact() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSuccess = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <SiteHeader />

      {/* Contact Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Tagline */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
          <h3 className="text-lg font-semibold text-white mb-1">{t('contact.cardTitle')}</h3>
          <p className="text-gray-500 text-sm mb-6">{t('contact.cardSubtitle')}</p>

          <ContactForm onSuccess={handleSuccess} onCancel={handleCancel} />
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
