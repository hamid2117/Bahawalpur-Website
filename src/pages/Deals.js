import React from 'react'

export const Deals = () => {
  return (
    <section className='section deals' id='deals'>
      <div className='title__wrapper'>
        <h2 className='title'>
          Hot <span className='subtitle'>Deals</span>
        </h2>
      </div>
      <form>
        <div className='input__group'>
          <input
            className='form__control'
            type='email'
            placeholder='your email'
            name='email'
            id='email'
          />
          <button type='submit' className='btn__submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}
