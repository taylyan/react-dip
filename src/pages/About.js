import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <h1> About us</h1>
            <p>We get robbed, we fuck up robber, *ding*ding buisness idea</p>
        </div>
    </div>
  )
}

export default About