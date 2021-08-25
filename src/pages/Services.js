import React from 'react'
import { data } from '../components/ServicesData'
export const Services = () => {
  return (
    <section className='section services' id='services'>
      <div className='title__wrapper'>
        <h2 className='title' style={{ color: '#fffffe' }}>
          Our{' '}
          <span className='subtitle' style={{ color: '#f9bc60' }}>
            Services
          </span>
        </h2>
      </div>
      <div className='section__center services__center'>
        {data.map((tour) => {
          const { id, icon, text, title } = tour
          return (
            <article className='service' key={id}>
              <span className='service__icon'>{icon}</span>
              <div className='service__info'>
                <h4 className='service__title'>{title}</h4>
                <p className='service__text'>{text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
