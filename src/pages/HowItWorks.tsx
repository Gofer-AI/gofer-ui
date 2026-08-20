import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-950">
      <SiteHeader />

      {/* Hero */}
      <section className="px-6 py-20 text-center border-b border-gray-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-4">{t('howitworks.eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('howitworks.titlePre')} Gofer <span className="text-blue-600">AI</span> {t('howitworks.titlePost')}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('howitworks.intro')}
          </p>
        </div>
      </section>

      {/* Three Feature Blocks */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">{t('howitworks.pipelineTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Block 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 text-left">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">{t('howitworks.step1Label')}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">{t('howitworks.step1Title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('howitworks.step1Body')}
              </p>
            </div>

            {/* Block 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 text-left">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-purple-500 uppercase tracking-widest">{t('howitworks.step2Label')}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">{t('howitworks.step2Title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('howitworks.step2Body')}
              </p>
            </div>

            {/* Block 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 text-left">
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-green-500 uppercase tracking-widest">{t('howitworks.step3Label')}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3">{t('howitworks.step3Title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('howitworks.step3Body')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">{t('howitworks.researchTitle')}</h2>
          <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
            {t('howitworks.researchIntro')}
          </p>

          <div className="space-y-10">
            <ResearchBlock tag={t('howitworks.r1Tag')} title={t('howitworks.r1Title')} body={t('howitworks.r1Body')} />
            <ResearchBlock tag={t('howitworks.r2Tag')} title={t('howitworks.r2Title')} body={t('howitworks.r2Body')} />
            <ResearchBlock tag={t('howitworks.r3Tag')} title={t('howitworks.r3Title')} body={t('howitworks.r3Body')} />
            <ResearchBlock tag={t('howitworks.r4Tag')} title={t('howitworks.r4Title')} body={t('howitworks.r4Body')} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">{t('howitworks.ctaTitle')}</h2>
          <p className="text-gray-400 mb-8">
            {t('howitworks.ctaBody')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors shadow-lg shadow-blue-600/30"
          >
            {t('cta.applyBeta')}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ResearchBlock({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-1 rounded-full bg-blue-600 self-stretch" />
      <div>
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">{tag}</span>
        <h3 className="text-lg font-bold text-white mt-1 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
