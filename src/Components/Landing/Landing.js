import React from 'react'
import "./Landing.css"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

function Landing() {
  return (
    <div className='landing' id="home">
      <ParallaxProvider>
      <Parallax speed={-50}>
      <section className="star-animation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
       <img  className='landing__Heading' src="JSCOP@4x.png" alt="" />
       {/* <h3 className='landing__Heading'> JSCOP</h3> */}
       </Parallax>
       </ParallaxProvider>
    </div>
  )
}

export default Landing