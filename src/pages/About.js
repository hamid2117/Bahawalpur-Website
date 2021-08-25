import React from 'react'
import image from '../Images/AboutImg.jpg'

const About = () => {
  return (
    <section className='section about' id='about'>
      <div className='title__wrapper'>
        <h2 className='title'>
          About <span className='subtitle'>us</span>
        </h2>
      </div>
      <div className='about__center section__center'>
        <article className='about__img'>
          <img src={image} alt='sd' class='about__photo' />
        </article>
        <article className='about__info'>
          <h3>Explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            doloribus commodi distinctio nulla at possimus unde doloremque
            reprehenderit repellendus eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            doloribus commodi distinctio nulla at possimus unde doloremque
            reprehenderit repellendus eos.
          </p>
          <a href='#' className='btn__primary'>
            Read More
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
