import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ChidiImage from '../assets/Chidi.png';
import JasonImage from '../assets/Jason.JPG';
import LabLabLogo from '../assets/lablab_surge_transparent.png';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950">
      <PageHeader />

      {/* Hero Section */}
      <section className="px-6 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              About Gofer <span className="text-blue-500">AI</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're building the cognitive layer that bridges human skill and robotic execution through advanced vision AI and semantic understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                Gofer AI is pioneering the future of human-robot collaboration. We believe that teaching robots should be as natural as showing a colleague how to do something.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our platform uses state-of-the-art multimodal AI to analyze human demonstrations, extract actionable primitives, and generate executable robot instructions - no programming required.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-gray-800 rounded-2xl p-8">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">70%</div>
                  <p className="text-gray-400">Reduction in robot training time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">10x</div>
                  <p className="text-gray-400">Faster demonstration retrieval</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
                  <p className="text-gray-400">No-code robot programming</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">The Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built by researchers and engineers passionate about making robotics accessible to everyone.
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
              <p className="text-purple-400 text-sm mb-3">Co-Founder</p>
              <p className="text-gray-400 text-sm">
                Collaborating on strategic vision and robotics innovation
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
              <p className="text-blue-400 text-sm mb-3">Co-Founder</p>
              <p className="text-gray-400 text-sm">
                AI researcher specializing in computer vision and robotics learning
              </p>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-600/50 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">?</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Join Us</h3>
              <p className="text-green-400 text-sm mb-3">Open for Collaboration</p>
              <p className="text-gray-400 text-sm">
                Help us build the future of human-robot collaboration
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
                Born at LabLab AI Surge Hackathon
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Gofer AI was created during the LabLab AI Surge Hackathon, where we pioneered innovative solutions for human-robot collaboration using cutting-edge multimodal AI technology.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <span className="px-4 py-2 bg-purple-600/20 border border-purple-600/30 rounded-lg text-purple-300">
                  Multimodal AI
                </span>
                <span className="px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg text-blue-300">
                  Computer Vision
                </span>
                <span className="px-4 py-2 bg-green-600/20 border border-green-600/30 rounded-lg text-green-300">
                  Robotics Learning
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
            Ready to Transform Robot Learning?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join researchers and roboticists who are using Gofer AI to accelerate their work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-colors"
            >
              Request Demo Access
            </Link>
            <Link
              to="/documentation"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold rounded-lg transition-colors border border-gray-700"
            >
              View Documentation
            </Link>
          </div>
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
              <Link to="/contact" className="hover:text-gray-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
