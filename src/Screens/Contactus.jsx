import React from 'react'
import Header from '../Components/Header'
import DrawerComponent from '../Components/DrawerComponent'

const Contactus = () => {
  return (
    <div>
      <div>
        <Header />

        {/* hero section */}
        <header id='contact-hero'>
        <DrawerComponent/>

          <h1>Contact Us</h1>
        </header>
        {/* contact-us section */}
        <section id='contact-us'>
          <div className='wrapper2'>
            <div className='element'>
              <div className='form'>
                <h2>Get A Free Quote</h2>
                <form action='#' method='post'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Your Name'
                  />
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Your Email'
                  />
                  <input
                    type='text'
                    name='address'
                    id='address'
                    placeholder='Address'
                  />
                  <textarea
                    name='message'
                    id='message'
                    cols={30}
                    rows={10}
                    placeholder='Message'
                    defaultValue={''}
                  />
                  <button href='#' type='submit' className='cta'>
                    Submit
                  </button>
                </form>
              </div>
              <div className='map'>
                <div style={{ width: '100%' }}>
                  <iframe
                    width='100%'
                    height={606}
                    frameBorder={0}
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                    src='https://maps.google.com/maps?width=100%25&height=606&hl=en&q=fleetgenuis,%20naples%20bay+(fleetgenuis%20)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
                  >
                    &lt;a href="https://www.maps.ie/population/" &gt;Calculate
                    population in area&lt;/a &gt;
                  </iframe>
                </div>
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

export default Contactus
