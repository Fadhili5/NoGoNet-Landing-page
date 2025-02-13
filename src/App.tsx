import React from 'react';
import { Shield, Users, Brain, Lock, CheckCircle, Globe, Fingerprint } from 'lucide-react';
import z1 from './assets/z1.jpg';  // Ensure the path to your image is correct

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Main navigation">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
              <span className="text-xl font-bold text-gray-900">NoGoNet</span>
            </div>
            <div className="flex space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                aria-label="Install Extension"
              >
                Install Extension
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Image Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="w-full h-96 overflow-hidden rounded-lg">
            <img
              src={z1}
              alt="Boy playing at laptop in the room"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Protect Your Family Section */}
        <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white bg-opacity-80 p-10 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Protect Your Family from
              <span className="text-blue-600"> Harmful Content</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Advanced protection against illegal sites, betting platforms, and inappropriate content using cutting-edge fingerprinting technology.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                  aria-label="Get Started with Extension Installation"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mt-4 text-gray-500">Comprehensive protection for a safer internet experience</p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 p-5 rounded-full">
                  <Fingerprint className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Advanced Detection</h3>
                <p className="mt-2 text-center text-gray-500">
                  Uses FingerprintJS technology to identify and block harmful websites
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-500 p-5 rounded-full">
                  <Lock className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Parental Controls</h3>
                <p className="mt-2 text-center text-gray-500">
                  Customizable settings to protect children from inappropriate content
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-blue-500 p-5 rounded-full">
                  <Globe className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Global Database</h3>
                <p className="mt-2 text-center text-gray-500">
                  Constantly updated database of harmful and illegal websites
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-4 text-gray-500">Simple setup, powerful protection</p>
            </div>

            <div className="mt-20 flex justify-center space-x-10">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center">
                  1
                </div>
                <p className="mt-2 text-sm text-gray-500">Install Extension</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center">
                  2
                </div>
                <p className="mt-2 text-sm text-gray-500">Configure Settings</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center">
                  3
                </div>
                <p className="mt-2 text-sm text-gray-500">Stay Protected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Trusted by Parents and Organizations</h2>
                <p className="mt-4 text-gray-500">
                  Join thousands of parents and organizations who trust Illegal Site Detector to create a safer internet environment.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    'Real-time protection against harmful content',
                    'Regular database updates',
                    'Easy-to-use interface',
                    'Customizable blocking rules',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1591543620767-582b2e76369e?auto=format&fit=crop&q=80"
                  alt="Family using computer together, showcasing online safety"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-white" aria-hidden="true" />
              <span className="text-white font-semibold">NoGoNet</span>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} NoGoNet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;