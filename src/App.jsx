import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TheatreCurtain from './components/TheatreCurtain'
import Image from './components/Image'
import YearScroll from './components/YearScroll'

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
          </div>
</TheatreCurtain>
    </>
  )
}

export default App
