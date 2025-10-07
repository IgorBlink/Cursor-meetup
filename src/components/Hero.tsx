import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Terminal-style background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-terminal-green/20"></div>
          ))}
        </div>
      </div>
      
      {/* Animated cursor */}
      <div className="absolute top-8 left-8 text-terminal-green animate-pulse">
        <span className="text-sm font-mono">&gt; cursor_meetup.exe --init</span>
      </div>

      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        {/* Main heading with terminal styling */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold font-mono text-terminal-green mb-4 tracking-wider">
            CURSOR
            <span className="block text-neon-cyan animate-pulse">MEETUP</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 font-mono">
            <span className="text-neon-purple">&gt; </span>
            <span className="animate-pulse">Connecting developers through AI-powered coding</span>
          </div>
        </div>

        {/* Event details */}
        <div className="bg-terminal-bg/80 backdrop-blur-sm border border-terminal-green/30 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; date:</span>
                <span className="text-white font-mono">March 15, 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; time:</span>
                <span className="text-white font-mono">6:00 PM - 9:00 PM PST</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; location:</span>
                <span className="text-white font-mono">San Francisco, CA</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; format:</span>
                <span className="text-white font-mono">Hybrid (In-person + Virtual)</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; capacity:</span>
                <span className="text-white font-mono">Limited to 100 developers</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neon-green font-mono text-sm">&gt; cost:</span>
                <span className="text-white font-mono">Free for all attendees</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-neon-cyan text-black font-mono font-bold px-8 py-4 rounded-lg hover:bg-neon-cyan/80 transition-all duration-300 transform hover:scale-105 border border-neon-cyan/50 shadow-lg shadow-neon-cyan/25">
            &gt; Register Now
          </button>
          <button className="border border-neon-green text-neon-green font-mono font-bold px-8 py-4 rounded-lg hover:bg-neon-green hover:text-black transition-all duration-300 transform hover:scale-105">
            &gt; View Agenda
          </button>
        </div>

        {/* Terminal prompt at bottom */}
        <div className="mt-16 text-sm text-gray-500 font-mono">
          <span className="animate-pulse">█</span> Press any key to continue...
        </div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-1/4 left-10 text-neon-purple/30 font-mono text-xs animate-pulse">
        <div>const meetup = new CursorMeetup();</div>
        <div>meetup.connect();</div>
      </div>
      <div className="absolute bottom-1/4 right-10 text-neon-cyan/30 font-mono text-xs animate-pulse">
        <div>function learn() &#123;</div>
        <div>&nbsp;&nbsp;return "AI + Coding";</div>
        <div>&#125;</div>
      </div>
    </section>
  )
}

export default Hero

