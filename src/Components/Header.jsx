import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userInfo } from '../Recoil'

const Header = () => {
  const userData = useRecoilValue(userInfo)

  return (
    <div>
      {' '}
      <div className='off-canvas'>
        <a href='javascript:void(0);' className='close'>
          x
        </a>
        <div className='canvas'>
          <div className='logo'>
            <Link to='/'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </Link>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span>Contact Us</span>
          <ul>
            <li>
              <Link to='tel:1234567890'>123 456 7890</Link>
            </li>
            <li>
              <Link to='mailto:info@support.com'>Info@Support.Com</Link>
            </li>
            <li>United State</li>
          </ul>
          <div className='social'>
            <Link to='https://www.facebook.com/' target='_blank'>
              <img src='./assets/images/facebook-icon.svg' alt='facebook' />
            </Link>
            <Link to='https://www.instagram.com/' target='_blank'>
              <img src='./assets/images/instagram-icon.svg' alt='instagram' />
            </Link>
            <Link to='https://www.linkedin.com/' target='_blank'>
              <img src='./assets/images/linkedin-icon.svg' alt='linkedin' />
            </Link>
          </div>
        </div>
        <div className='mobile-menu'>
          <ul>
            <li>
              <Link to='/'>
                <img src='./assets/images/home-icon.svg' alt='home' />
              </Link>
            </li>
            <li>
              <Link to='/Comment'>Start Comments</Link>
            </li>
            <li>
              <Link to='/Support'>Support Local People / Business</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Contactus'>Contact Us</Link>
            </li>
            <li>
              <a
                href='https://dedicatedtestingserver.com/jsat/shop/'
                target='_blank'
              >
                Merchandize
              </a>
            </li>
            <li>
              <Link to='/News'>News/Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* cart drawer */}
      <div className='cart-drawer'>
        <a href='javascript:void(0);' className='close'>
          x
        </a>
        <div className='drawer'>
          <div className='cart'>
            <div className='cart-list'>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
              <div className='in-cart'>
                <img
                  src='./assets/images/merchandize-1.png'
                  alt='merchandize'
                />
                <div className='product-info'>
                  <h2>product name</h2>
                  <div>
                    <span>1</span> x <span>$30.00</span>
                  </div>
                </div>
                <div className='delete-item'>
                  <a href='javascript:void(0)'>x</a>
                </div>
              </div>
            </div>
          </div>
          <div className='drawer-footer'>
            <span>Sub Total $330.00</span>
            <div className='action'>
              <Link to='/Cart' className='cta'>
                View Cart
              </Link>
              <Link to='/Checkout' className='cta'>
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='overlay' />
      {/* menu */}
      <nav>
        <div className='wrapper1'>
          <div className='logo'>
            <Link to='/'>
              <img src='./assets/images/logo.svg' alt='logo' />
            </Link>
          </div>
          <div className='menu'>
            <ul>
              <li>
                <Link to='/'>
                  <img src='./assets/images/home-icon.svg' alt='home' />
                </Link>
              </li>
              <li>
                <Link to='/Comment'>Start Comments</Link>
              </li>
              <li>
                <Link to='/Support'>Support Local People / Business</Link>
              </li>
              <li>
                <Link to='/About'>About</Link>
              </li>
              <li>
                <Link to='/Contactus'>Contact Us</Link>
              </li>
              <li>
                <a
                  href='https://dedicatedtestingserver.com/jsat/shop/'
                  target='_blank'
                >
                  Merchandize
                </a>
              </li>
              <li>
                <Link to='/News'>News/Blogs</Link>
              </li>{' '}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
