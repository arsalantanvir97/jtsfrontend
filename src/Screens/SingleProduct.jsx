import React from 'react'
import Header from '../Components/Header'

const SingleProduct = () => {
  return (
    <div>
      <div>
        <Header />

        {/* hero section */}
        <header id='single-product-hero'>
          <div className='hero-icons'>
            <div id='drawer'>
              <a href='#'>
                <img src='./assets/images/cart-icon.svg' alt='cart' />
              </a>
            </div>
            <div className='hamburger' id='hamburger-1'>
              <span className='line' />
              <span className='line' />
              <span className='line' />
            </div>
          </div>
          <h1>Product</h1>
        </header>
        {/* single product section */}
        <section id='single-product'>
          <div className='wrapper1'>
            <div className='product-image'>
              <img
                src='./assets/images/merchandize-1.png'
                alt='product image'
              />
            </div>
            <div className='product-details'>
              <h2>product name</h2>
              <span>$30.00</span>
              <div className='qty-input'>
                <button
                  className='qty-count qty-count--minus'
                  data-action='minus'
                  type='button'
                >
                  -
                </button>
                <input
                  className='product-qty'
                  type='number'
                  name='product-qty'
                  min={1}
                  max={10}
                  defaultValue={1}
                />
                <button
                  className='qty-count qty-count--add'
                  data-action='add'
                  type='button'
                >
                  +
                </button>
              </div>
              <div id='add-to-cart'>
                <a href='#' className='cta'>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer id='footer'>
          <div className='wrapper1'>
            <div className='col-1'>
              <img src='./assets/images/logo.svg' alt='logo' />
              <p>
                Your text goes here Your text goes here Your text goes here Your
                text goes here Your text goes here Your text goes here Your text
                goes here Your text goes here Your text goes here Your text goes
                here Your text goes here Your text goes here Your text goes here
                Your text goes here Your text goes here.
              </p>
              <div className='social'>
                <a href='https://www.facebook.com/' target='_blank'>
                  <img src='./assets/images/facebook-icon.svg' alt='facebook' />
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                  <img
                    src='./assets/images/instagram-icon.svg'
                    alt='instagram'
                  />
                </a>
                <a href='https://www.linkedin.com/' target='_blank'>
                  <img src='./assets/images/linkedin-icon.svg' alt='linkedin' />
                </a>
              </div>
            </div>
            <div className='col-2'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='#'>Start Comments </a>
                </li>
                <li>
                  <a href='#'>Support Local People / Business</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
                <li>
                  <a href='#'>Merchandize</a>
                </li>
              </ul>
            </div>
            <div className='col-3'>
              <h3>Useful Links</h3>
              <ul>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <a href='tel:1234567890'>123 456 7890</a>
                </li>
                <li>
                  <a href='mailto:info@support.com'>Info@Support.Com</a>
                </li>
                <li>United State</li>
              </ul>
            </div>
          </div>
          <div className='copyright'>
            <p>© 2023 Just Stick &amp; Tried. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default SingleProduct
