import React from 'react'

interface Speaker {
  name: string
  title: string
  company: string
  bio: string
  expertise: string[]
  avatar: string
  social_links: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: "Alex Chen",
      title: "Senior AI Engineer",
      company: "Cursor",
      bio: "Leading the development of Cursor's AI-powered coding assistant with 8+ years in machine learning and developer tools.",
      expertise: ["AI/ML", "Developer Tools", "TypeScript", "Python"],
      avatar: "👨‍💻",
      social_links: {
        twitter: "@alexchen_ai",
        github: "alexchen-dev",
        linkedin: "alex-chen-cursor"
      }
    },
    {
      name: "Sarah Johnson",
      title: "Product Manager",
      company: "Cursor",
      bio: "Product strategist focused on developer experience and AI-human collaboration. Former Google and Stripe PM.",
      expertise: ["Product Strategy", "Developer Experience", "AI Products", "Go-to-Market"],
      avatar: "👩‍💼",
      social_links: {
        twitter: "@sarahj_product",
        github: "sarahj-dev",
        linkedin: "sarah-johnson-pm"
      }
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO & Co-founder",
      company: "DevTools Inc",
      bio: "Serial entrepreneur and full-stack developer passionate about the future of AI-assisted development.",
      expertise: ["Full-Stack", "AI Integration", "Startup Strategy", "React"],
      avatar: "👨‍🚀",
      social_links: {
        twitter: "@marcus_devtools",
        github: "marcusrodriguez",
        linkedin: "marcus-rodriguez-cto"
      }
    },
    {
      name: "Dr. Emily Zhang",
      title: "Research Scientist",
      company: "AI Research Lab",
      bio: "PhD in Computer Science, specializing in natural language processing and code generation models.",
      expertise: ["NLP", "Code Generation", "Research", "PyTorch"],
      avatar: "👩‍🔬",
      social_links: {
        twitter: "@emily_ai_research",
        github: "emilyzhang-research",
        linkedin: "emily-zhang-phd"
      }
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-cyan animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-neon-green animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-purple animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-terminal-green animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-terminal-green mb-4">
            <span className="text-neon-purple">&gt; </span>
            Speakers & Hosts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-300 font-mono text-lg">
            Meet the experts shaping the future of AI-powered development
          </p>
        </div>

        {/* Speakers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-terminal-bg/80 to-gray-900/80 backdrop-blur-sm border border-terminal-green/20 rounded-lg p-6 hover:border-neon-cyan/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Avatar and basic info */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {speaker.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-mono text-white group-hover:text-neon-cyan transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <div className="text-neon-green font-mono text-sm mb-1">
                      {speaker.title}
                    </div>
                    <div className="text-gray-400 font-mono text-sm">
                      @ {speaker.company}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
                  {speaker.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-neon-green/20 text-neon-green font-mono text-xs px-3 py-1 rounded-full border border-neon-green/30 group-hover:bg-neon-green/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex space-x-4">
                  {speaker.social_links.twitter && (
                    <a 
                      href={`https://twitter.com/${speaker.social_links.twitter.replace('@', '')}`}
                      className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 font-mono text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {speaker.social_links.twitter}
                    </a>
                  )}
                  {speaker.social_links.github && (
                    <a 
                      href={`https://github.com/${speaker.social_links.github}`}
                      className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-mono text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/{speaker.social_links.github}
                    </a>
                  )}
                </div>
              </div>

              {/* Terminal-style decorations */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-neon-green/40"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-neon-green/40"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block bg-terminal-bg/80 border border-terminal-green/30 rounded-lg px-8 py-4 font-mono">
            <span className="text-neon-green">&gt; </span>
            <span className="text-white">Want to speak at our next meetup?</span>
            <br />
            <span className="text-gray-400 text-sm">Contact us: speakers@cursor-meetup.dev</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Speakers

