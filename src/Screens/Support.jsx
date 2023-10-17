import React, { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { baseURL, imageURL } from '../utils/api'
import { useRecoilState } from 'recoil'
import { userInfo } from '../Recoil'
import Swal from 'sweetalert2'
import axios from 'axios'
import moment from 'moment'
import CommentForm from '../Components/CommentForm'
import CommentList from '../Components/CommentList'
// import 'emoji-mart/css/emoji-mart.css'
import DrawerComponent from '../Components/DrawerComponent'

const Support = () => {
  const [userData, setuserData] = useRecoilState(userInfo)
  const [comments, setcomments] = useState([])

  const [text, setText] = useState('')
  const [file, setfile] = useState('')
  const [filetype, setfiletype] = useState(null)
  const fileInputRef = useRef(null)

  const [showEmojiPicker, setShowEmojiPicker] = useState(false)

  useEffect(() => {
    getCommentHandler()
  }, [])

  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const handleEmojiSelect = (emoji) => {
    setText(text + emoji.native)
  }

  const fileUploader = (event) => {
    // console.log('event', event?.target?.files[0]?.type)
    const imageFile = event?.target?.files[0]
    console.log('imageFile', imageFile)
    setfile(imageFile)
    setfiletype(event?.target?.files[0]?.type)
  }
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const getCommentHandler = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
      const res = await axios.get(
        `${baseURL}/support/getSupportComments`,
        config
      )
      setcomments(res?.data?.comments)
    } catch (error) {}
  }
  const submitCommentHandler = async () => {
    console.log('asdsdadfffffffffff')
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
      console.log('2')

      const formData = new FormData()

      formData.append('text', text)
      formData.append('filetype', filetype)
      formData.append(filetype?.includes('image') ? '_image' : 'vid', file)
      console.log('3')

      const res = await axios.post(
        `${baseURL}/support/createSupportComment`,
        formData,
        config
      )
      console.log('4')

      console.log('res', res)
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Comment Added Successfully',
        showConfirmButton: false,
        timer: 1500,
      })
      setfiletype(null)
      setText('')
      setfile('')
      getCommentHandler()
    } catch (error) {}
  }

  return (
    <div>
      <div>
        {/* off canvas menu */}
        <Header />

        {/* hero section */}
        <header id='support-hero'>
          <DrawerComponent/>

          <h1>Support Local People / Business</h1>
        </header>
        {/* support section */}
        <section id='start-comment'>
          <div className='wrapper2'>
            <div className='comment-area'>
              <div className='element'>
                <CommentForm
                  submitCommentHandler={submitCommentHandler}
                  text={text}
                  handleInputChange={handleInputChange}
                  setShowEmojiPicker={setShowEmojiPicker}
                  fileUploader={fileUploader}
                  fileInputRef={fileInputRef}
                  handleButtonClick={handleButtonClick}
                  showEmojiPicker={showEmojiPicker}
                  handleEmojiSelect={handleEmojiSelect}
                  handleEmojiClick={handleEmojiClick}
                  filetype={filetype}
                  file={file}
                />
              </div>
            </div>
            <CommentList comments={comments} />
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

export default Support
