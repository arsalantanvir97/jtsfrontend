import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfo } from '../Recoil'
import SwalAlert from '../Components/SwalAlert'
import { baseURL, imageURL } from '../utils/api'
import axios from 'axios'
import moment from 'moment'

const Home = ({ history }) => {
  const [userData, setuserData] = useRecoilState(userInfo)
  const [comments, setcomments] = useState([])

  useEffect(() => {
    getCommentHandler()
  }, [])

  const logOutHandler = () => {
    setuserData(null)
    localStorage.removeItem('token')
    window.location.reload()
  }
  const getCommentHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
      const res = await axios.get(`${baseURL}/comment/getComments`, config)
      console.log(
        'res?.data?.commentsres?.data?.commentsres?.data?.comments',
        res?.data?.comments
      )
      setcomments(res?.data?.comments)
    } catch (error) {}
  }
  return (
    <div>
      <div>
        <Header />
        {/* hero section */}
        <header id='hero'>
          <div className='hero-icons'>
            <Link
              to='#'
              onClick={() => {
                userData ? logOutHandler() : history?.replace('/Login')
              }}
            >
              {!userData ? (
                <img
                  src='./assets/images/user-icon-white.svg'
                  alt='user icon'
                />
              ) : (
                'Logout'
              )}
            </Link>
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
        </header>
        {/* welcome section */}
        {/* <section id='welcome'>
          <div className='wrapper2'>
            <h2>
              Welcome to JSATnow.com. We're here to have fun, get some things
              off our chest, and support our local towns, businesses, and
              friends. And to let it ALL out! So tell us what's on your mind.
            </h2>
            <div className='news'>
              <div className='news-card'>
                <img src='./assets/images/news-1.png' alt='news 1' />
                <h2>In The News</h2>
                <p>
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text.
                </p>
                <a href='#' className='cta'>
                  See More
                </a>
              </div>
              <div className='news-card'>
                <img src='./assets/images/news-2.png' alt='news 2' />
                <h2>In The News</h2>
                <p>
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text.
                </p>
                <a href='#' className='cta'>
                  See More
                </a>
              </div>
              <div className='news-card'>
                <img src='./assets/images/news-3.png' alt='news 3' />
                <h2>In The News</h2>
                <p>
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text goes here
                  Your text goes here Your text goes here Your text.
                </p>
                <a href='#' className='cta'>
                  See More
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* comment-section */}
        <section id='comments'>
          <div className='wrapper2'>
            <div className='comment-list'>
              {comments?.length > 0 &&
                comments?.map((comm) => (
                  <div className='element'>
                    <div className='comment-card'>
                      <img
                        className='profile-pic'
                        src='./assets/images/profile.png'
                        alt='profile'
                      />
                      <div className='comment'>
                        <div className='title'>
                          <h4>{comm?.user?.fullName}</h4>
                          <div className='posted'>
                            {' '}
                            {moment(comm?.createdAt).fromNow()}
                          </div>
                        </div>
                        <div className='created'>
                          <div className='date'>
                            {' '}
                            {moment(comm?.createdAt).format('DD/MM/YYYY')}
                          </div>
                          <div className='time'>
                            {' '}
                            {moment(comm?.createdAt).format('hh:mm A')}
                          </div>
                        </div>
                        <p>{comm?.text}</p>
                        {comm?.filecontent ==
                        null ? null : comm?.filetype?.includes('image') ? (
                          // <div className='image-container2'>
                          <img
                            src={`${imageURL}${comm?.filecontent}`}
                            // style={{
                            //   maxWidth: '100%',
                            //   height: 'auto',
                            //   objectFit: 'contain',
                            //   objectPosition: 'center',
                            //   // display: 'block',
                            //   // margin: '0 auto',
                            //   // maxWidth: '100%',
                            // }}
                          />
                        ) : (
                          // </div>
                          // <div className='video-container2'>
                          <video
                            width={320}
                            height={240}
                            controls
                            autoPlay
                            muted
                          >
                            <source
                              src={`${imageURL}${comm?.filecontent}`}
                              type={comm?.filecontent}
                            />
                            Your browser does not support the video tag.
                          </video>
                          // </div>
                        )}
                      </div>
                    </div>
                    <div className='comment-cta'>
                      <div />
                      <div className='actions'>
                        <div className='like'>
                          <img
                            src='./assets/images/heart-icon.svg'
                            alt='icon'
                          />
                          <span>Like</span>
                        </div>
                        <div className='reply'>
                          <img
                            src='./assets/images/reply-icon.svg'
                            alt='icon'
                          />
                          <span>Reply</span>
                        </div>
                        <div className='share'>
                          <img
                            src='./assets/images/share-icon.svg'
                            alt='icon'
                          />
                          <button className='share-social popup-button'>
                            Share
                          </button>
                          <div className='share-dropdown popup'>
                            <ul>
                              <a href='#'>
                                <li>
                                  <img
                                    src='./assets/images/facebook-icon.svg'
                                    alt='icon'
                                  />
                                </li>
                              </a>
                              <a href='#'>
                                <li>
                                  <img
                                    src='./assets/images/instagram-icon.svg'
                                    alt='icon'
                                  />
                                </li>
                              </a>
                              <a href='#'>
                                <li>
                                  <img
                                    src='./assets/images/linkedin-icon.svg'
                                    alt='icon'
                                  />
                                </li>
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <Link
              to='#'
              onClick={() => {
                userData
                  ? history.replace('/Comment')
                  : SwalAlert('info', '', 'Please Login to continue')
              }}
              className='cta'
            >
              Go to Start Comments
            </Link>
          </div>
        </section>
        {/* topic section */}
        <section id='topic'>
          <div className='wrapper2'>
            <h2>Hot Topics</h2>
            <div className='topic-cards'>
              <div className='card'>
                <div className='topic'>
                  <img
                    className='topic-profile'
                    src='./assets/images/placeholder.png'
                    alt='profile'
                  />
                  <p>
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here.
                  </p>
                </div>
                <div className='drop-shadow' />
                <a href='#' className='cta'>
                  Add A Comments
                </a>
              </div>
              <div className='card'>
                <div className='topic'>
                  <img
                    className='topic-profile'
                    src='./assets/images/placeholder.png'
                    alt='profile'
                  />
                  <p>
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here.
                  </p>
                </div>
                <div className='drop-shadow' />
                <a href='#' className='cta'>
                  Add A Comments
                </a>
              </div>
              <div className='card'>
                <div className='topic'>
                  <img
                    className='topic-profile'
                    src='./assets/images/placeholder.png'
                    alt='profile'
                  />
                  <p>
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here Your text goes here Your text goes here
                    Your text goes here.
                  </p>
                </div>
                <div className='drop-shadow' />
                <a href='#' className='cta'>
                  Add A Comments
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

export default Home
