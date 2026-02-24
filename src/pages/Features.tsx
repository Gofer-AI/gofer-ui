import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-950">
      <PageHeader />

      {/* Hero Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful Features for Modern Robotics
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to teach robots through natural human demonstrations
          </p>
        </div>
      </section>

      {/* Feature 1: Action Detection */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Advanced Action Detection
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our multimodal AI analyzes video demonstrations to identify precise action primitives: reach, grasp, move, place, release, and more.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Frame-by-Frame Analysis</h3>
                    <p className="text-gray-400 text-sm">Extract actions at your specified frame rate with temporal precision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Object Interaction Detection</h3>
                    <p className="text-gray-400 text-sm">Identify which hand is interacting with which objects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visual Timeline</h3>
                    <p className="text-gray-400 text-sm">Color-coded visualization of action sequences over time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-medium">REACH</span>
                  </div>
                  <p className="text-gray-400 text-sm">Left hand reaching toward object at 2.3s</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-medium">GRASP</span>
                  </div>
                  <p className="text-gray-400 text-sm">Left hand grasping cup at 3.1s</p>
                </div>
                <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-white font-medium">MOVE</span>
                  </div>
                  <p className="text-gray-400 text-sm">Moving cup to target location at 4.5s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Semantic Search */}
      <section className="px-6 py-20 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                  <input
                    type="text"
                    placeholder="person picking up a cup"
                    className="w-full bg-transparent text-white outline-none"
                    readOnly
                  />
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-900/60 border border-blue-600/50 rounded-lg p-4 hover:border-blue-600 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">demo_cup_pickup.mp4</span>
                      <span className="text-blue-400 text-sm">95% match</span>
                    </div>
                    <p className="text-gray-400 text-sm">Person reaching and grasping red cup from table</p>
                  </div>
                  <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 hover:border-blue-600/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">coffee_demo.mp4</span>
                      <span className="text-purple-400 text-sm">87% match</span>
                    </div>
                    <p className="text-gray-400 text-sm">Picking up coffee mug and moving it</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Semantic Video Search
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Find relevant demonstrations instantly using natural language. Our AI-powered search understands context, not just keywords.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Multimodal Embeddings</h3>
                    <p className="text-gray-400 text-sm">Search across video frames, audio, and text descriptions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Ranked Results</h3>
                    <p className="text-gray-400 text-sm">Relevance scoring shows the best matches first</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Instant Playback</h3>
                    <p className="text-gray-400 text-sm">Click any result to view the demonstration immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Intelligent Automation */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-2xl mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">
                Intelligent Automation
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Transform human demonstrations into actionable insights. Our platform automatically extracts and structures knowledge from video demonstrations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Structured Output</h3>
                    <p className="text-gray-400 text-sm">Receive organized, machine-readable data from demonstrations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">3D Motion Analysis</h3>
                    <p className="text-gray-400 text-sm">Capture precise movement trajectories and spatial relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Flexible Integration</h3>
                    <p className="text-gray-400 text-sm">Export data in multiple formats for your robotics workflow</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-gray-950 border border-gray-700 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Video Analysis Complete</h4>
                      <p className="text-gray-400 text-sm">30-second demonstration processed</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Actions Detected:</span>
                      <span className="text-green-400 font-medium">12</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Objects Identified:</span>
                      <span className="text-blue-400 font-medium">5</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Motion Sequences:</span>
                      <span className="text-purple-400 font-medium">8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="px-6 py-20 border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">More Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Additional capabilities that make Gofer AI the complete robotics learning platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 4 */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configurable Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Adjust frame rate, window size, and detection parameters to match your use case
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Processing</h3>
              <p className="text-gray-400 leading-relaxed">
                Stream video analysis with live updates and instant feedback on detected actions
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 hover:border-blue-600/50 transition-colors">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Export & Integration</h3>
              <p className="text-gray-400 leading-relaxed">
                Download results in multiple formats or integrate directly via our API
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the future of robot learning with Gofer AI
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors"
          >
            Request Demo Access
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Gofer AI © 2026. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <Link to="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400 transition-colors">
                About
              </Link>
              <Link to="/features" className="hover:text-gray-400 transition-colors">
                Features
              </Link>
              <a href="https://github.com/Gofer-AI" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                GitHub
              </a>
              <a href="mailto:contact@gofer-ai.com" className="hover:text-gray-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
