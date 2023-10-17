import React from 'react'
import Header from '../Components/Header'
import DrawerComponent from '../Components/DrawerComponent'

const Checkout = () => {
  return (
    <div>
      <div>
        <Header />

        {/* hero section */}
        <header id='checkout-hero'>
        <DrawerComponent/>

          <h1>Checkout</h1>
        </header>
        {/* single product section */}
        <section id='checkout'>
          <div className='wrapper2'>
            <div className='alert'>
              <p>Have a coupon? Click here to enter your code</p>
            </div>
            <form action='#' method='post'>
              <div className='billing-details'>
                <h2>Billing details</h2>
                <div className='user-name'>
                  <div>
                    <label htmlFor='first_name'>
                      First Name <span>*</span>
                    </label>
                    <input type='text' name='first_name' id />
                  </div>
                  <div>
                    <label htmlFor='last_name'>
                      Last Name <span>*</span>
                    </label>
                    <input type='text' name='last_name' id />
                  </div>
                </div>
                <label htmlFor='company_name'>
                  Company Name <span>(optional)</span>
                </label>
                <input type='text' name='company_name' id />
                <label htmlFor='country'>
                  Country / Region <span>*</span>
                </label>
                <select name='country' id>
                  <option value='select' disabled>
                    Select
                  </option>
                  <option value='country_1'>country 1</option>
                  <option value='country_2'>country 2</option>
                  <option value='country_3'>country 3</option>
                  <option value='country_4'>country 4</option>
                  <option value='country_5'>country 5</option>
                  <option value='country_6'>country 6</option>
                  <option value='country_7'>country 7</option>
                  <option value='country_8'>country 8</option>
                </select>
                <label htmlFor='street_address'>
                  Street address <span>*</span>
                </label>
                <input
                  type='text'
                  name='street_address'
                  id
                  placeholder='House number and street name'
                />
                <input
                  type='text'
                  name='street_address'
                  id
                  placeholder='Apartment, suite, unit, etc. (optional)'
                />
                <label htmlFor='town_city'>
                  Town / City <span>*</span>
                </label>
                <input type='text' name='town_city' id />
                <label htmlFor='state'>
                  State <span>*</span>
                </label>
                <select name='State' id>
                  <option value='select' disabled>
                    Select
                  </option>
                  <option value='value_1'>State 1</option>
                  <option value='value_2'>State 2</option>
                  <option value='value_3'>State 3</option>
                  <option value='value_4'>State 4</option>
                  <option value='value_5'>State 5</option>
                  <option value='value_6'>State 6</option>
                  <option value='value_7'>State 7</option>
                  <option value='value_8'>State 8</option>
                </select>
                <label htmlFor='zip_Code'>
                  ZIP Code <span>*</span>
                </label>
                <input type='text' name='zip_Code' id />
                <label htmlFor='phone'>
                  Phone <span>*</span>
                </label>
                <input type='number' name='phone' id />
                <label htmlFor='email'>
                  Email <span>*</span>
                </label>
                <input type='email' name='email' id />
                <h3>Additional information</h3>
                <label htmlFor='order_notes'>
                  Order notes <span>(optional)</span>
                </label>
                <textarea
                  name='order_notes'
                  id
                  cols={30}
                  rows={3}
                  placeholder='Notes about your order, e.g. special notes for delivery.'
                  defaultValue={''}
                />
              </div>
              <div className='your-order'>
                <h2>Your order</h2>
                <div className='cart-list'>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                  <div className='in-cart'>
                    <img
                      src='./assets/images/merchandize-1.png'
                      alt='merchandize'
                    />
                    <div className='product-info'>
                      <h2>product name</h2>
                      <div>
                        Quantity: <span>1</span>
                      </div>
                    </div>
                    <div className='product-price'>$30.00</div>
                  </div>
                </div>
                <div className='cart-total'>
                  <div className='sub-total'>
                    <span>Subtotal</span>
                    <span>$30.00</span>
                  </div>
                  <div className='discount'>
                    <span>Discount</span>
                    <span>$10.00</span>
                  </div>
                  <div className='total'>
                    <span>Total</span>
                    <span>$30.00</span>
                  </div>
                </div>
                <div className='payment-faq'>
                  <p>Direct bank transfer</p>
                  <p>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{' '}
                    <a href='#'>privacy policy</a>.
                  </p>
                </div>
                <button type='submit' className='cta'>
                  Place Order
                </button>
              </div>
            </form>
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

export default Checkout
