import React from 'react'
import { data } from '../components/FeaturedData'

const Featured = () => {
  return (
    <section className='section featured' id='featured'>
      <div className='title__wrapper'>
        <h2 className='title' style={{ color: '#fffe' }}>
          featured{' '}
          <span className='subtitle' style={{ color: '#f9bc60' }}>
            tours
          </span>
        </h2>
      </div>
      <div className='section__center featured__center'>
        {data.map((tour) => {
          const { id, icon, image, date, tourTitle, tourArea, duration, cash } =
            tour

          return (
            <article className='tour__card' key={id}>
              <div className='tour__img__container'>
                <img src={image} alt='' />
                <p className='tour__date'>{date}</p>
              </div>
              <div className='tour__footer'>
                <h4 className='tour__title'>{tourTitle}</h4>
                <div className='tour__info'>
                  <p className='tour__country'>
                    <span>{icon}</span> {'  '}
                    {tourArea}
                  </p>
                  <div className='tour__details'>
                    <p>{duration}</p>
                    <p>from Rs:{cash}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className='tour__link'>
        <a href='#' className='btn__primary'>
          All tours
        </a>
      </div>
    </section>
  )
}

export default Featured
