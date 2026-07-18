import { useEffect } from 'react'

const ParticlesBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.classList.add('particle')
      
      const size = Math.random() * 5 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      
      particle.style.left = `${Math.random() * 100}vw`
      particle.style.top = `${Math.random() * 100}vh`
      
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`
      
      document.querySelector('.particles').appendChild(particle)
      
      setTimeout(() => {
        particle.remove()
      }, 20000)
    }
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      setTimeout(createParticle, i * 100)
    }
    
    // Continue creating particles
    const interval = setInterval(createParticle, 300)
    
    return () => clearInterval(interval)
  }, [])
  
  return <div className="particles"></div>
}

export default ParticlesBackground