import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import Timeline from './components/Timeline'
import PrepSolution from './components/PrepSolution'
import Platform from './components/Platform'
import TrustSection from './components/TrustSection'
import VideoSection from './components/VideoSection'
import CertificateSection from './components/CertificateSection'
import TransformComponent from './components/TransformComponent'
import ConnectUs from './components/ConnectUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <section id="home">
        <HeroSection/>
      </section>
      <section id="timeline">
        <Timeline/>
      </section>
      <section id="features">
        <CardSection/>
      </section>
      <section id="solution">
        <PrepSolution/>
      </section>
      <section id="platform">
        <Platform/>
      </section>
      <TrustSection/>
      <section id="demo">
        <VideoSection/>
      </section>
      <CertificateSection/>
      <TransformComponent/>
      <section id="contact">
        <ConnectUs/>
      </section>
      <Footer/>
    </div>
  )
}

export default App