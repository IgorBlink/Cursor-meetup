import React from 'react'
import Hero from './components/Hero'
import EventFacts from './components/EventFacts'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Hero />
      <EventFacts />
      <Speakers />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
