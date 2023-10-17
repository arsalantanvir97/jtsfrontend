import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const DrawerComponent = () => {
  return (
        <div className='hero-icons'>
            <div id='drawer'>
              <Link to='#'>
                <img src='./assets/images/cart-icon.svg' alt='cart' />
              </Link>
            </div>
            <div className='hamburger' id='hamburger-1'>
              <span className='line' />
              <span className='line' />
              <span className='line' />
            </div>
          </div>
  )
}

export default DrawerComponent
