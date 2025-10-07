import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-terminal-green/20 py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-4 h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-neon-cyan/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono text-terminal-green">
              CURSOR MEETUP
            </h3>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              Connecting developers through AI-powered coding. 
              Join the future of development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/cursor" 
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cursor
              </a>
              <a 
                href="https://github.com/cursor" 
                className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-mono text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                github/cursor
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-mono text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#agenda" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  &gt; Event Agenda
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  &gt; Speakers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  &gt; FAQ
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                  &gt; Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-mono text-white">
              Contact
            </h4>
            <div className="space-y-2 font-mono text-sm text-gray-400">
              <div>
                <span className="text-neon-green">&gt; email:</span> 
                <span className="ml-2">hello@cursor-meetup.dev</span>
              </div>
              <div>
                <span className="text-neon-green">&gt; discord:</span> 
                <span className="ml-2">cursor-dev-community</span>
              </div>
              <div>
                <span className="text-neon-green">&gt; location:</span> 
                <span className="ml-2">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-terminal-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 font-mono text-sm">
              © 2024 Cursor IDE Meetup. Built with React + TypeScript + Tailwind.
            </div>
            <div className="flex space-x-6 text-gray-500 font-mono text-sm">
              <a href="#" className="hover:text-neon-cyan transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-300">
                Code of Conduct
              </a>
              <a href="#" className="hover:text-neon-cyan transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Terminal-style bottom prompt */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-terminal-bg/80 border border-terminal-green/30 rounded-lg px-4 py-2 font-mono text-sm">
            <span className="text-neon-green">&gt; </span>
            <span className="text-white">Thank you for joining the Cursor community!</span>
            <span className="text-neon-cyan animate-pulse ml-2">█</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

