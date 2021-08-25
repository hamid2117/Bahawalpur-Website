import React from 'react'
import image from '../Images/AboutImg.jpg'
import image2 from '../Images/mosque2.jpg'
import image3 from '../Images/bazaar.jpg'
import image4 from '../Images/jeep.jpg'
import image5 from '../Images/jeep2.jpg'
import image6 from '../Images/mahal.jpg'
import image7 from '../Images/lab.jpg'
import image8 from '../Images/kila.jpg'
import image9 from '../Images/mosque3.jpg'
import SearchIcon from '@material-ui/icons/Search'
const data = [
  image,
  // image2,
  // image3,
  // image4,
  // image5,
  image6,
  image7,
  image8,
  image9,
]
export const Gallery = () => {
  return (
    <section className='section gallery' id='gallery'>
      <div className='title__wrapper'>
        <h2 className='title'>
          Our <span className='subtitle'>Gallery</span>
        </h2>
      </div>
      <div className='gallery__center'>
        {data.map((img) => {
          return (
            <div className='gallery__img__container'>
              <img className='gallery__img' src={img} alt='' />
              <span className='gallery__icon'>
                <SearchIcon />
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
