import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft,Megaphone,Globe,  ChevronRight, LineChart, Palette } from 'lucide-react'
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';

import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.jpg'


import pp1 from '../assets/pp1.webp'
import pp2 from '../assets/pp2.webp'
import pp3 from '../assets/pp3.webp'
import pp4 from '../assets/pp4.webp'
import pp5 from '../assets/pp5.webp'
import pp6 from '../assets/pp6.webp'





export default function PortfolioSections() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentWorkSlide, setCurrentWorkSlide] = useState(0)

  const services = [
    {
      title: "BRAND\nSOLUTIONS",
      icon:  <Megaphone className="w-24 h-24 text-gray-600" />
    },
    {
      title: "DIGITAL\nSOLUTIONS",
      icon: <Globe className="w-24 h-24  text-gray-600" />
    },
    {
      title: "MARKETING\nSOLUTIONS",
      icon: <LineChart className="w-24 h-24  text-gray-600" />
    },
    {
      title: "GRAPHICS\nSOLUTIONS",
      icon: <Palette className="w-24 h-24  text-gray-600" />
    }
  ];

  const featuredWork = [
    { id: 1, title: "The wouff", image: pp1, category: "Advertising, Website, Product shoot, Social Media", link : "https://thewouff.com/" },
    { id: 2, title: "SOBER", image: pp2, category: "Shipping, Packaging, Product shoot, Website, Social Media",link : "https://drinksober.co/" },
    { id: 3, title: "STYLE ISLAND", image: pp3, category: "Website", link : "https://www.styleisland.com/" },
    { id: 4, title: "VERA MOSS", image: pp4, category: "PHOTOSHOOT", link : "#" },
    { id: 5, title: "suri", image: pp5, category: "Website, Social Media, Product shoot", link : "https://www.surifreshextract.com/" },
    { id: 6, title: "SAMSARA", image: pp6, category: "Website, Product Shoot, Social Media", link : "https://www.samsaragin.com/" }
  ]

  const sampleWork = [
    { id: 1, image:  s1 , description: "Client review : ★★★★" },
    { id: 2, image:  s2, description: "Client review : ★★★★★" },
    { id: 3, image:  s3, description: "Client review : ★★★★" },
    { id: 4, image:  s4 , description: "Client review : ★★★★★" },
    { id: 5, image: s5 , description: "Client review : ★★★★" }
  ]

  const adSlides = [
    {
      title: "SOB**",
      image: p1,
      description: "Skyrocket sales as expected"
    },
    {
      title: "Cec**",
      image: p2,
      description: "Growth with us is 100%"
    },
    {
      title: "Aste**",
      image: p3,
      description: "Start today get sales"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkSlide((prevSlide) => (prevSlide + 1) % sampleWork.length)
    }, 3000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white">
      {/* Services Section */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">What Can We Do Together?</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white text-red p-12 transition-transform duration-300 hover:-translate-y-4 flex flex-col items-center"
        >
          <div className="mb-6">{service.icon}</div>
          <h3
            className="text-4xl font-bold mb-6 text-center whitespace-pre-line"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "transparent"
            }}
          >
            {service.title}
          </h3>
          <p className="text-lg text-center">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Featured Work Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-6xl font-bold tracking-tighter">FEATURED BRANDS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((work) => (
              <motion.div
                key={work.id}
                className="relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <p className="text-[#5fcfff] text-sm mb-2 uppercase">{work.category}</p>
                  <h3 className="text-2xl font-bold mb-4 uppercase">{work.title}</h3>
                  <a href={work.link}><button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">View Project</button></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
             
              <h2 className="text-6xl font-bold">Our Work</h2>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold">{String(currentWorkSlide + 1).padStart(2, '0')}</span>
              <span className="text-sm text-gray-400">/{String(sampleWork.length).padStart(2, '0')}</span>
            </div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mb-12">
            View some of our recent shortlisted and awesome work that we created for our happy clients.
          </p>
          <div className="aspect-video relative bg-gray-900 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentWorkSlide}
                src={sampleWork[currentWorkSlide].image}
                alt={`Sample Work ${currentWorkSlide + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-lg">{sampleWork[currentWorkSlide].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ads Showcase Section */}
<section className="py-20 bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">ADS THAT PERFORM</h2>
    <div className="relative">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ duration: 0.5 }}
        >
          {adSlides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-8 rounded-lg text-black">
                <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                <p className="mb-6">{slide.description}</p>
                <div className="aspect-video relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left Button */}
      <button
        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-slate-300 text-black p-3 rounded-full z-10"
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrentSlide(Math.min(adSlides.length - 1, currentSlide + 1))}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-slate-300 text-black p-3 rounded-full z-10"
        disabled={currentSlide === adSlides.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>
</section>

    </div>
  )
}