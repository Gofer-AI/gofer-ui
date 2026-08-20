import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ChidiImage from '../assets/Chidi.png';
import JasonImage from '../assets/Jason.JPG';
import LabLabLogo from '../assets/lablab_surge_transparent.png';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {t('about.heroTitlePre')} Gofer <span className="text-blue-600">AI</span> {t('about.heroTitlePost')}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('about.heroSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{t('about.missionTitle')}</h2>
              <p className="text-gray-400 leading-relaxed">
                {t('about.missionP1')}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t('about.missionP2')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">70%</div>
                  <p className="text-gray-400">{t('about.stat1')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">10x</div>
                  <p className="text-gray-400">{t('about.stat2')}</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                  <p className="text-gray-400">{t('about.stat3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('about.teamTitle')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 - Jason */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-600/50 transition-colors">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={JasonImage}
                  alt="Jason Okorie"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Jason Okorie</h3>
              <p className="text-purple-400 text-sm mb-3">{t('about.jasonRole')}</p>
              <p className="text-gray-400 text-sm">
                {t('about.jasonBio')}
              </p>
            </div>

            {/* Team Member 2 - Chidi */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-600/50 transition-colors">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={ChidiImage}
                  alt="Chidi Okoro"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Chidi Okoro</h3>
              <p className="text-blue-400 text-sm mb-3">{t('about.chidiRole')}</p>
              <p className="text-gray-400 text-sm">
                {t('about.chidiBio')}
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-600/50 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">?</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('about.joinTitle')}</h3>
              <p className="text-green-400 text-sm mb-3">{t('about.joinRole')}</p>
              <p className="text-gray-400 text-sm">
                {t('about.joinBio')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LabLab Hackathon Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-gray-800 rounded-2xl p-12 text-center">
            <div className="flex flex-col items-center space-y-6">
              <img
                src={LabLabLogo}
                alt="LabLab AI Surge Hackathon"
                className="h-24 w-auto"
              />
              <h2 className="text-3xl font-bold text-white">
                {t('about.lablabTitle')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                {t('about.lablabBody')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-lg text-purple-300">
                  {t('about.tag1')}
                </span>
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-300">
                  {t('about.tag2')}
                </span>
                <span className="px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-lg text-green-300">
                  {t('about.tag3')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('about.ctaTitle')}
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('about.ctaBody')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors"
            >
              {t('cta.applyBeta')}
            </Link>
            <Link
              to="/documentation"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold rounded-lg transition-colors border border-gray-700"
            >
              {t('cta.viewDocs')}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
