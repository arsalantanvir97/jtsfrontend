import React from 'react'
import Header from '../Components/Header'
import DrawerComponent from '../Components/DrawerComponent'

const Cart = () => {
  return (
    <div>
      <div>
        <Header />
        {/* hero section */}
        <header id='cart-hero'>
        <DrawerComponent/>

          <h1>Cart</h1>
        </header>
        {/* single product section */}
        <section id='cart'>
          <div className='wrapper2'>
            <div className='alert'>
              <p>Please enter a coupon code.</p>
            </div>
            <div className='cart-table'>
              <form action='#'>
                <table>
                  <thead>
                    <tr>
                      <th scope='col' />
                      <th scope='col' />
                      <th scope='col'>Product</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Quantity</th>
                      <th scope='col'>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label='Remove'>
                        <span>x</span>
                      </td>
                      <td data-label='Product Image'>
                        <img
                          src='./assets/images/merchandize-1.png'
                          alt='Product image'
                        />
                      </td>
                      <td data-label='Product'>Product Name</td>
                      <td data-label='Amount'>$30.00</td>
                      <td data-label='Quantity'>
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
                      </td>
                      <td data-label='Subtotal'>$30.00</td>
                    </tr>
                    <tr>
                      <td data-label='Remove'>
                        <span>x</span>
                      </td>
                      <td data-label='Product Image'>
                        <img
                          src='./assets/images/merchandize-2.png'
                          alt='Product image'
                        />
                      </td>
                      <td data-label='Product'>Product Name</td>
                      <td data-label='Amount'>$30.00</td>
                      <td data-label='Quantity'>
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
                      </td>
                      <td data-label='Subtotal'>$30.00</td>
                    </tr>
                    <tr>
                      <td data-label='Remove'>
                        <span>x</span>
                      </td>
                      <td data-label='Product Image'>
                        <img
                          src='./assets/images/merchandize-3.png'
                          alt='Product image'
                        />
                      </td>
                      <td data-label='Product'>Product Name</td>
                      <td data-label='Amount'>$30.00</td>
                      <td data-label='Quantity'>
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
                      </td>
                      <td data-label='Subtotal'>$30.00</td>
                    </tr>
                    <tr>
                      <td data-label='Remove'>
                        <span>x</span>
                      </td>
                      <td data-label='Product Image'>
                        <img
                          src='./assets/images/merchandize-4.png'
                          alt='Product image'
                        />
                      </td>
                      <td data-label='Product'>Product Name</td>
                      <td data-label='Amount'>$30.00</td>
                      <td data-label='Quantity'>
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
                      </td>
                      <td data-label='Subtotal'>$30.00</td>
                    </tr>
                    <tr className='action'>
                      <td colSpan={6}>
                        <div className='coupon'>
                          <input
                            type='text'
                            placeholder='Coupon code'
                            name='coupon code'
                          />
                          <button
                            type='submit'
                            className='cta'
                            name='apply coupon'
                          >
                            Apply Coupon
                          </button>
                        </div>
                        <button
                          type='submit'
                          className='cta update-cart'
                          name='update cart'
                        >
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div className='cart-collaterals'>
                <div className='hidden-element' />
                <div className='cart-totals'>
                  <h2>Cart totals</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td className='mobile-hide'>Subtotal</td>
                        <td data-label='Subtotal'>$120.00</td>
                      </tr>
                      <tr>
                        <td className='mobile-hide'>Discount</td>
                        <td className='discount' data-label='Discount'>
                          $10.00
                        </td>
                      </tr>
                      <tr>
                        <td className='mobile-hide'>Total</td>
                        <td data-label='Total'>$110.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href='./checkout.html' className='checkout cta'>
                    Proceed To Checkout
                  </a>
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

export default Cart
