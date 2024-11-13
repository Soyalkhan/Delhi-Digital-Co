import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
export default function PortfolioSections() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentWorkSlide, setCurrentWorkSlide] = useState(0)

  const services = [
    {
      title: "BRAND\nSOLUTIONS",
      description: "We are your trusted PARTNER IN BRANDING, offering tailored solutions to build a STRONG BRAND IDENTITY that resonates with your audience."
    },
    {
      title: "DIGITAL\nSOLUTIONS",
      description: "We guide your online presence towards success, meticulously crafting and implementing our EXPERTLY TAILORED MARKETING STRATEGIES"
    }
  ]

  const featuredWork = [
    { id: 1, title: "Salaryplan Campaign", image: "/placeholder.jpg", category: "Advertising" },
    { id: 2, title: "Mi Circus", image: "/placeholder.jpg", category: "E-commerce" },
    { id: 3, title: "Coca-Cola Wall Art", image: "/placeholder.jpg", category: "Brand Design" },
    { id: 4, title: "KLM Airlines", image: "/placeholder.jpg", category: "Digital Marketing" },
    { id: 5, title: "Skinora Beauty", image: "/placeholder.jpg", category: "Social Media" },
    { id: 6, title: "Odd Coffee", image: "/placeholder.jpg", category: "Packaging" }
  ]

  const sampleWork = [
    { id: 1, image:  s1 , description: "Innovative branding for tech startup" },
    { id: 2, image:  s2, description: "E-commerce redesign for fashion brand" },
    { id: 3, image:  s3, description: "Social media campaign for food delivery app" },
    { id: 4, image:  s4 , description: "Product packaging for eco-friendly cosmetics" },
    { id: 5, image: s5 , description: "Website overhaul for financial services firm" }
  ]

  const adSlides = [
    {
      title: "December Campaign",
      image: "/placeholder.jpg",
      description: "Giving you more reasons to be on the road"
    },
    {
      title: "Christmas Special",
      image: "/placeholder.jpg",
      description: "Cherish the magic of Christmas season"
    },
    {
      title: "Zero Down Payment",
      image: "/placeholder.jpg",
      description: "Save more and worry less"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkSlide((prevSlide) => (prevSlide + 1) % sampleWork.length)
    }, 5000) // Change slide every 5 seconds

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
                className="group bg-[#FFE135] text-black p-12 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="text-4xl font-bold mb-6 whitespace-pre-line" style={{ WebkitTextStroke: '1px black', WebkitTextFillColor: 'transparent' }}>
                  {service.title}
                </h3>
                <p className="text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-8xl font-bold tracking-tighter">FEATURED</h2>
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
                  <p className="text-[#FFE135] text-sm mb-2">{work.category}</p>
                  <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                  <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">View Project</button>
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
              <span className="text-sm text-gray-400 block mb-2">SAMPLE</span>
              <h2 className="text-6xl font-bold">Work</h2>
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
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white text-black p-2 rounded-full"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(adSlides.length - 1, currentSlide + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white text-black p-2 rounded-full"
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