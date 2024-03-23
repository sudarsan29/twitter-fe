import { useState } from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import {API_BASE_URL} from '../../src/config'

const Profile = () => {

  const [image, setImage] = useState({ preview: '', data: '' })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showUpload, setUploadShow] = useState(false);

  const handleUploadClose = () => setUploadShow(false);
  const handleUploadShow = () => setUploadShow(true);
  
  const CONFIG_OBJ = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  const handleFileSelect = (event)=>{
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    }
    setImage(img);
  }

  const handleImgUpload = async ()=>{
    let formData = new FormData();
    formData.append('file', image.data);

    const response = axios.post(`${API_BASE_URL}/upload`, formData, CONFIG_OBJ)
    return response;
  }

  
  return (
    <div className='container home-container'>
      <div className='row'>
        <div className='col-2 home-home' >
          <i className="fa-solid mt-2 icon fa-message"></i>
          <div className='mt-3'>
            <a href="home"><button className='button mt-5 fw-bold'><i class="fa-solid fa-house"></i> Home</button></a><br />
            <a href="profile"><button className='button mt-3 fw-bold'><i class="fa-solid fa-user"></i> Profile</button></a><br />
            <a href="login"><button className='button mt-3 fw-bold'><i class="fa-solid fa-right-from-bracket"></i> Logout</button></a><br />
            <button type='button' className='btn-btn fw-bold'><i className="fa-solid fa-circle-user mt-2"></i></button>
            <b className='mt-5'>John David</b><p className='ms-5'>@johndavid</p>
          </div>
        </div>
        <div className='col-5 border user-part'>
          <div className="card shadow mt-4 card-profile">
            <h5 className='ms-2 mt-2'>Profile</h5>
            <div className='bg ms-2 mt-2'></div>
            <div className='d-flex flex-row'>
              <img className='logger-pic ms-4' alt='profile' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
              <button className='upload-photo mt-2 fw-bold' onClick={handleUploadShow}><span>Upload Profile Photo</span></button>
              <button className='edit m-2 fw-bold' onClick={handleShow}><span>Edit</span></button>
            </div>
            <h6 className='ms-3 mt-2'>John David</h6>
            <p className='ms-3'>@johndavid</p>
            <div className='d-flex flex-row'>
              <p><i className="fa-solid fa-calendar-days ms-2"></i> Date Wed March 2005</p> <br />
              <p><i className="fa-solid fa-location-dot ms-3"></i> Location, India</p>
            </div>
            <p><i className="fa-regular fa-calendar ms-2"></i> Joined Sat April 2003</p>
            <p className='ms-2 fw-bold'>1 Following   0 Followers</p>
            <div className='fw-bold text-center'>Tweets and Replies</div>
            <div className='col-11 border ms-3' style={{width: "490px"}}>
              <div className='d-flex flex-row'>
                <img className='twitter-pic ms-2 mt-2' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' /><br />
                <p className='fw-bold mt-1 ms-2 twit-user'>@johndavid </p>
                <p className='twit-dates mt-1 ms-1'>- Fri Feb 2004</p>
                <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <p className='twit-user ms-5'>Follow me on Twitter </p>
              <i className="ms-5 fa-sharp fa-regular fa-heart"></i> 3
              <i className="ms-5 fa-regular fa-comment"></i> 5
              <i className="ms-5 fa-solid fa-retweet retweeticon"></i> 0<br />
            </div>
            <div className='col-11 border ms-3' style={{width: "490px"}}>
              <div className='d-flex flex-row'>
                <img className='twitter-pic ms-2 mt-2' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' /><br />
                <p className='fw-bold mt-1 ms-2 twit-user'>@johndavid </p>
                <p className='twit-dates mt-1 ms-1'>- Sun Jan 2003</p>
                <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <p className='twit-user ms-5'>I'm leaving from London </p>
              <i className="ms-5 fa-sharp fa-regular fa-heart"></i> 2
              <i className="ms-5 fa-regular fa-comment"></i> 3
              <i className="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
            </div>
            <div className='col-11 border ms-3' style={{width: "490px"}}>
              <div className='d-flex flex-row'>
                <img className='twitter-pic ms-2 mt-2' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' /><br />
                <p className='fw-bold mt-1 ms-2 twit-user'>@johndavid </p>
                <p className='twit-dates mt-1 ms-1'>- Thu Aug 2004</p>
                <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <p className='twit-user ms-5'>Superb cool!!! </p>
              <i className="ms-5 fa-sharp fa-regular fa-heart"></i> 3
              <i className="ms-5 fa-regular fa-comment"></i> 2
              <i className="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>Name</b> <br/>
        <input type='text' placeholder='Name' className='edit-name mt-2'/>
        <b className='mt-2'>Location</b> <br/>
        <input type='text' placeholder='Location' className='edit-name mt-2'/>
        <b className='mt-2'>Date of Birth</b> <br/>
        <div className=''>
        <input type='date' placeholder='Date of Birth' className='edit-name mt-2'/></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpload} onHide={handleUploadClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Profile Pic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-box'><p>Note: The image should be square in shape</p></div>
          <div className='dropZoneContainer'>
          <button className='mt-3 file-upload'>
          <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" onChange={handleFileSelect} />
          </button>
            {image.preview && <img src={image.preview} width='400' height='400' alt='' />}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUploadClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUploadClose}>
            Save Profile Pic
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Profile