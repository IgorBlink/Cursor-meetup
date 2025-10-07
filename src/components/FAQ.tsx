import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const FAQ: React.FC = () => {
  const [open_items, set_open_items] = useState<number[]>([])

  const faq_items: FAQItem[] = [
    {
      question: "What is the Cursor IDE Meetup?",
      answer: "The Cursor IDE Meetup is a developer-focused event where we explore the future of AI-powered coding. Learn about Cursor's features, connect with fellow developers, and discover how AI can enhance your development workflow.",
      category: "General"
    },
    {
      question: "Do I need to be familiar with Cursor IDE to attend?",
      answer: "Not at all! This meetup is perfect for developers of all levels. We'll cover everything from basic setup to advanced AI-assisted coding techniques. Whether you're a Cursor beginner or expert, you'll find value in attending.",
      category: "General"
    },
    {
      question: "Is the event free to attend?",
      answer: "Yes, the Cursor IDE Meetup is completely free for all attendees. We believe in making AI-powered development accessible to everyone in the developer community.",
      category: "Registration"
    },
    {
      question: "Can I attend virtually?",
      answer: "Absolutely! We offer both in-person and virtual attendance options. Virtual attendees will receive a Zoom link before the event and can participate in Q&A sessions and networking.",
      category: "Registration"
    },
    {
      question: "What should I bring to the event?",
      answer: "For in-person attendees: your laptop, charger, and enthusiasm! For virtual attendees: just your computer and a stable internet connection. We'll provide all the materials and resources you need.",
      category: "Preparation"
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Yes! We've built in dedicated networking time and structured activities to help you connect with other developers. There will also be breakout sessions and informal discussions throughout the event.",
      category: "Networking"
    },
    {
      question: "What topics will be covered?",
      answer: "We'll cover AI-assisted coding, code generation, debugging with AI, productivity tips, and the future of developer tools. Plus live coding sessions and Q&A with our expert speakers.",
      category: "Content"
    },
    {
      question: "How do I register for the event?",
      answer: "Simply click the 'Register Now' button on this page and fill out the registration form. You'll receive a confirmation email with all the details and links you need.",
      category: "Registration"
    }
  ]

  const toggle_item = (index: number) => {
    set_open_items(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const categories = [...new Set(faq_items.map(item => item.category))]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Terminal-style background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-6 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border border-neon-purple/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-terminal-green mb-4">
            <span className="text-neon-purple">&gt; </span>
            FAQ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto mb-6"></div>
          <p className="text-gray-300 font-mono text-lg">
            Frequently asked questions about the Cursor IDE Meetup
          </p>
        </div>

        {/* FAQ Terminal Interface */}
        <div className="bg-terminal-bg/90 backdrop-blur-sm border border-terminal-green/30 rounded-lg overflow-hidden shadow-2xl shadow-neon-cyan/10">
          {/* Terminal header */}
          <div className="bg-gray-800 border-b border-terminal-green/30 px-6 py-3 flex items-center space-x-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 font-mono text-sm ml-4">
              cursor-meetup-faq.terminal
            </div>
          </div>

          {/* FAQ Content */}
          <div className="p-6">
            <div className="mb-6">
              <div className="text-neon-green font-mono text-sm mb-2">
                &gt; ./faq --help
              </div>
              <div className="text-gray-300 font-mono text-xs">
                Available categories: {categories.join(', ')}
              </div>
            </div>

            <div className="space-y-4">
              {faq_items.map((item, index) => (
                <div key={index} className="border border-terminal-green/20 rounded-lg overflow-hidden">
                  {/* Question */}
                  <button
                    onClick={() => toggle_item(index)}
                    className="w-full text-left p-4 bg-terminal-bg/50 hover:bg-terminal-bg/70 transition-colors duration-300 flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-neon-cyan font-mono text-sm">
                        {open_items.includes(index) ? '[-]' : '[+]'}
                      </span>
                      <span className="text-white font-mono font-medium group-hover:text-neon-cyan transition-colors duration-300">
                        {item.question}
                      </span>
                    </div>
                    <div className="text-gray-400 font-mono text-xs px-2 py-1 bg-neon-green/20 text-neon-green rounded">
                      {item.category}
                    </div>
                  </button>

                  {/* Answer */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      open_items.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 pt-0 bg-black/50 border-t border-terminal-green/10">
                      <div className="text-gray-300 font-mono text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal footer */}
            <div className="mt-8 pt-6 border-t border-terminal-green/20">
              <div className="flex items-center space-x-2 text-sm font-mono">
                <span className="text-neon-green">&gt; </span>
                <span className="text-white">Still have questions?</span>
              </div>
              <div className="mt-2 text-gray-400 font-mono text-xs">
                Contact us: support@cursor-meetup.dev | Discord: cursor-dev-community
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-neon-cyan to-neon-green text-black font-mono font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all duration-300 transform hover:scale-105">
            &gt; Register for Cursor Meetup
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ

