import moment from 'moment'
import React from 'react'
import { imageURL } from '../utils/api'

const CommentList = ({ comments }) => {
  return (
    <div>
      {' '}
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
                      {moment(comm?.createdAt).fromNow()}
                    </div>
                  </div>
                  <div className='created'>
                    <div className='date'>
                      {moment(comm?.createdAt).format('DD/MM/YYYY')}
                    </div>
                    <div className='time'>
                      {moment(comm?.createdAt).format('hh:mm A')}
                    </div>
                  </div>
                  <p>{comm?.text}</p>

                  {comm?.filecontent == null ? null : comm?.filetype?.includes(
                      'image'
                    ) ? (
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
                    <video width={320} height={240} controls autoPlay muted>
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
                    <img src='./assets/images/heart-icon.svg' alt='icon' />
                    <span>Like</span>
                  </div>
                  <div className='reply'>
                    <img src='./assets/images/reply-icon.svg' alt='icon' />
                    <span>Reply</span>
                  </div>
                  <div className='share'>
                    <img src='./assets/images/share-icon.svg' alt='icon' />
                    <button className='share-social popup-button'>Share</button>
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
    </div>
  )
}

export default CommentList
