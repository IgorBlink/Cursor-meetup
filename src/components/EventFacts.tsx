import React from 'react'

interface EventFact {
  icon: string
  title: string
  description: string
  value: string
}

const EventFacts: React.FC = () => {
  const event_facts: EventFact[] = [
    {
      icon: "🎯",
      title: "Focus Areas",
      description: "AI-powered development, code generation, and developer productivity",
      value: "3+ Topics"
    },
    {
      icon: "👥",
      title: "Networking",
      description: "Connect with fellow developers and AI enthusiasts",
      value: "100+ Devs"
    },
    {
      icon: "⚡",
      title: "Live Demos",
      description: "Real-time coding sessions with Cursor IDE",
      value: "5+ Demos"
    },
    {
      icon: "🏆",
      title: "Prizes",
      description: "Win exclusive Cursor swag and premium subscriptions",
      value: "$2K+ Value"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-neon-cyan/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-terminal-green mb-4">
            <span className="text-neon-purple">&gt; </span>
            Event Facts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-300 font-mono text-lg">
            Everything you need to know about the Cursor IDE Meetup
          </p>
        </div>

        {/* Facts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {event_facts.map((fact, index) => (
            <div 
              key={index}
              className="group relative bg-terminal-bg/60 backdrop-blur-sm border border-terminal-green/20 rounded-lg p-6 hover:border-neon-cyan/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {fact.icon}
                </div>
                
                {/* Value badge */}
                <div className="inline-block bg-neon-green text-black font-mono font-bold px-3 py-1 rounded-full text-sm mb-4">
                  {fact.value}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-mono text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {fact.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {fact.description}
                </p>
              </div>

              {/* Terminal-style corner decoration */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-green/30"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-green/30"></div>
            </div>
          ))}
        </div>

        {/* Bottom terminal prompt */}
        <div className="text-center mt-16">
          <div className="inline-block bg-terminal-bg/80 border border-terminal-green/30 rounded-lg px-6 py-3 font-mono text-sm">
            <span className="text-neon-green">&gt; </span>
            <span className="text-white">Loading event data...</span>
            <span className="text-neon-cyan animate-pulse ml-2">█</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventFacts

