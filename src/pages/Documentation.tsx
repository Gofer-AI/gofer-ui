import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Documentation() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-950">
      <SiteHeader />

      {/* Hero Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('documentation.heroTitle')}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('documentation.heroSubtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 space-y-2">
              <a href="#getting-started" className="block px-4 py-2 text-blue-400 bg-blue-600/10 rounded-lg font-medium">
                Getting Started
              </a>
              <a href="#action-detection" className="block px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                Action Detection
              </a>
              <a href="#semantic-search" className="block px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                Semantic Search
              </a>
              <a href="#data-export" className="block px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                Data & Export
              </a>
              <a href="#api-reference" className="block px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                API Reference
              </a>
              <a href="#faq" className="block px-4 py-2 text-gray-400 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                FAQ
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-16">
            {/* Getting Started */}
            <section id="getting-started">
              <h2 className="text-3xl font-bold text-white mb-6">{t('documentation.gsTitle')}</h2>

              <div className="space-y-6">
                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{t('documentation.gs1Title')}</h3>
                  <p className="text-gray-400 mb-4">
                    {t('documentation.gs1Body')}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {t('documentation.gs1Link')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </div>
            </section>

            {/* Action Detection */}
            <section id="action-detection" className="border-t border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Action Detection</h2>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Our action detection feature analyzes video demonstrations to extract action primitives like REACH, GRASP, MOVE, PLACE, and RELEASE.
                </p>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">How to Use</h3>
                  <ol className="space-y-3 text-gray-400">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span>Upload your demonstration video</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span>Configure analysis parameters (frame rate, max windows)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span>Click "Analyze Video" and wait for processing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span>View color-coded action timeline with detected primitives</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Action Primitives</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-white font-medium">REACH</span>
                      <span className="text-gray-400">- Hand moving toward an object</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-white font-medium">GRASP</span>
                      <span className="text-gray-400">- Hand closing around an object</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-white font-medium">MOVE</span>
                      <span className="text-gray-400">- Transporting grasped object</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                      <span className="text-white font-medium">PLACE</span>
                      <span className="text-gray-400">- Positioning object at target</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <span className="text-white font-medium">RELEASE</span>
                      <span className="text-gray-400">- Opening hand to release object</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Semantic Search */}
            <section id="semantic-search" className="border-t border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Semantic Search</h2>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Find relevant demonstrations using natural language queries. Our semantic search uses multimodal embeddings to understand the context of your search, not just keywords.
                </p>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Example Queries</h3>
                  <div className="space-y-2">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 font-mono text-sm text-gray-300">
                      person picking up a cup
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 font-mono text-sm text-gray-300">
                      reaching for an object on the table
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 font-mono text-sm text-gray-300">
                      grasping and moving a tool
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 font-mono text-sm text-gray-300">
                      two-handed manipulation task
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Search Tips</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Be descriptive: Include objects, actions, and context</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Use natural language: Write queries like you're describing to a colleague</span>
                    </li>
                    <li className="flex gap-2">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Results are ranked by relevance: Top matches appear first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Processing & Export */}
            <section id="data-export" className="border-t border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Data Processing & Export</h2>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Process video demonstrations and export structured data for your robotics workflow.
                </p>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Processing Workflow</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Upload Video</h4>
                        <p className="text-gray-400 text-sm">Submit your demonstration video for analysis</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">AI Analysis</h4>
                        <p className="text-gray-400 text-sm">Extract actions, objects, and motion patterns</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Review Results</h4>
                        <p className="text-gray-400 text-sm">View detected actions and semantic timeline</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Export Data</h4>
                        <p className="text-gray-400 text-sm">Download structured results in your preferred format</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Export Formats</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">JSON</h4>
                      <p className="text-gray-400 text-sm">Structured data for custom integrations</p>
                    </div>
                    <div className="bg-gray-950 border border-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">CSV</h4>
                      <p className="text-gray-400 text-sm">Tabular format for data analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api-reference" className="border-t border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-white mb-6">API Reference</h2>

              <div className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  Integrate Gofer AI into your workflow with our REST API.
                </p>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Upload Video</h3>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2">POST /upload_video</div>
                    <div className="text-gray-400">Content-Type: multipart/form-data</div>
                  </div>
                </div>

                <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Analyze Video</h3>
                  <div className="bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm">
                    <div className="text-green-400 mb-2">POST /analyze_video</div>
                    <div className="text-gray-400">Content-Type: application/json</div>
                  </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-600/50 rounded-xl p-6">
                  <div className="flex gap-3">
                    <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Full API documentation coming soon</h4>
                      <p className="text-gray-400 text-sm">Contact us for early API access and integration support</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="border-t border-gray-800 pt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <details className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 group">
                  <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                    What video formats are supported?
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-400 mt-4">
                    We support MP4, MOV, and AVI formats. For best results, use videos with 1080p resolution and clear visibility of hands and objects.
                  </p>
                </details>

                <details className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 group">
                  <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                    How long does video analysis take?
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-400 mt-4">
                    Processing time depends on video length and analysis settings. A typical 30-second video takes 1-2 minutes to analyze.
                  </p>
                </details>

                <details className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 group">
                  <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                    Can I use this for commercial robotics projects?
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-400 mt-4">
                    Yes! We offer commercial licensing. Contact us at support@goferai.space to discuss your use case and get a custom plan.
                  </p>
                </details>

                <details className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 group">
                  <summary className="text-white font-semibold cursor-pointer list-none flex items-center justify-between">
                    What robot platforms are supported?
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="text-gray-400 mt-4">
                    Our output format is platform-agnostic. You can integrate with any robot that accepts structured command sequences. We're actively developing adapters for popular platforms.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <section className="border-t border-gray-800 pt-16">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Need Help?
                </h2>
                <p className="text-gray-400 mb-6">
                  Our team is here to support you
                </p>
                <div className="flex justify-center">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
