import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import React from 'react'

const CommentForm = ({ submitCommentHandler, ...rest }) => {
  return (
    <div>
      {' '}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('asadsadsa')
          submitCommentHandler()
        }}
      >
        <div className='user-comment'>
          <img
            className='profile-pic'
            src='./assets/images/profile.png'
            alt='profile'
          />
          <div>
            <input
              type='text'
              value={rest.text}
              onChange={rest.handleInputChange}
              onFocus={() => rest.setShowEmojiPicker(false)}
              placeholder='Type your message...'
            />

            <button type='submit' className='cta-comment'>
              Comment
            </button>
          </div>
        </div>
        <div className='comment-cta'>
          <div />
          <div className='actions'>
            <div className='like'>
              {/* <img src="./assets/images/live-icon.svg" alt="icon" /> */}
              {/* <label for="video">Video</label> */}
              {/* <input
type="file"
name="video"
id="video"
accept="video/mp4,video/x-m4v,video/*"
/> */}
              <div>
                <input
                  onChange={rest.fileUploader}
                  type='file'
                  name='video'
                  accept='video/*'
                  ref={rest.fileInputRef}
                  className='fileuploader'
                  style={{ display: 'none' }}
                />
                <label
                  className='fileuploader-btn'
                  onClick={rest.handleButtonClick}
                >
                  <img src='./assets/images/live-icon.svg' alt='icon' />
                  Video
                </label>
              </div>
            </div>
            <div className='reply'>
              {/* <img src="./assets/images/photo-icon.svg" alt="icon" />
<span>Photo</span> */}
              <div className='upload__box'>
                <div className='upload__btn-box'>
                  <label className='upload__btn'>
                    <p>
                      <img src='./assets/images/photo-icon.svg' alt='icon' />
                      Photo
                    </p>
                    <input
                      onChange={rest.fileUploader}
                      type='file'
                      name='image'
                      accept='image/*'
                      className='upload__inputfile'
                    />
                  </label>
                </div>
                <div className='upload__img-wrap' />
              </div>
            </div>
            <div className='share'>
              {rest.showEmojiPicker && (
                <Picker
                  onEmojiSelect={rest.handleEmojiSelect}
                  set='apple'
                  style={{
                    position: 'absolute',
                    bottom: '80px',
                    right: '10px',
                  }}
                />
              )}
              <img
                onClick={() => rest.handleEmojiClick()}
                src='./assets/images/feeling-icon.svg'
                alt='icon'
              />
              <span onClick={() => rest.handleEmojiClick()}>
                Feeling/Activity
              </span>
            </div>
          </div>
          {rest.filetype == null ? null : rest.filetype?.includes('image') ? (
            <img
              src={URL.createObjectURL(rest.file)}
              alt='Uploaded'
              // style={{
              //   maxWidth: '100%',
              //   height: 'auto',
              //   objectFit: 'contain',
              //   objectPosition: 'center',
              // }}
            />
          ) : (
            // <div className='video-container'>
            <video width={320} height={240} controls autoPlay muted>
              <source
                src={URL.createObjectURL(rest.file)}
                type={rest.filetype}
              />
              Your browser does not support the video tag.
            </video>
            // </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default CommentForm
