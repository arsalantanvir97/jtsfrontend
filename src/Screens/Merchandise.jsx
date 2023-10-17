import React from 'react'
import Header from '../Components/Header'
import DrawerComponent from '../Components/DrawerComponent'

const Merchandise = () => {
  return (
    <div>
      <div>
        <Header />

        {/* hero section */}
        <header id='merchandize-hero'>
          <DrawerComponent/>

          <h1>Merchandize</h1>
        </header>
        {/* merchandize section */}
        <section id='merchandize'>
          <div className='wrapper2'>
            <div className='element'>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
              </div>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-2.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
              </div>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-3.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
              </div>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-4.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
              </div>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-5.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
              </div>
              <div className='product-card'>
                <a href='./single-product.html'></a>
                <div className='product-image'>
                  <a href='./single-product.html'>
                    <img
                      src='./assets/images/merchandize-6.png'
                      alt='product image'
                    />
                  </a>
                  <a href='#/?add-to-cart=01' className='cta'>
                    Add To Cart
                  </a>
                </div>
                <h2>Product Name</h2>
                <span>$20.00</span>
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

export default Merchandise
