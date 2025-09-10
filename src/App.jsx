import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TheatreCurtain from './components/TheatreCurtain'
import Image from './components/Image'
import YearScroll from './components/YearScroll'
import PortfolioGrid from './components/PortfolioGrid'
import BlackScreen from './components/BlackScreen'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import Testimonials from './components/Testimonials'
import InfiniteLogos from './components/InfiniteLogos'
import AwardsSection from './components/AwardSection'
import Team from './components/Team'
import Marquee from './components/Marquee'
import ServiceHero from './components/ServiceHero'
import CenteredSVG from './components/CenteredSVG'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<TheatreCurtain>
        
        <div className="bg-[#FCF7F3]  w-full">
          <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Image></Image>
      <YearScroll></YearScroll>
      <PortfolioGrid></PortfolioGrid>
       <ServiceHero></ServiceHero>
          </div>
        <div className="bg-black  w-full">
        
        <ServicesSection></ServicesSection>
        <WorkSection></WorkSection>
        <Testimonials></Testimonials>
        <InfiniteLogos></InfiniteLogos>
        <CenteredSVG></CenteredSVG>
        <AwardsSection></AwardsSection>
        <Team></Team>
        <Marquee></Marquee>
        
       
        </div>
</TheatreCurtain>
    </>
  )
}

export default App
