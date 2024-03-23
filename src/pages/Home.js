import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from './Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { API_BASE_URL } from '../../src/config'
import Swal from 'sweetalert2'

const Home = () => {
  const [image, setImage] = useState({ preview: '', data: '' })

  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.userReducer);
  console.log(user);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
    navigate('/login');
  }

  const CONFIG_OBJ = {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  }

  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    }
    setImage(img);
  }

  const handleImgUpload = async () => {
    let formData = new FormData();
    formData.append('file', image.data);

    const response = axios.post(`${API_BASE_URL}/uploadFile`, formData)
    return response;
  }

  const addPost = async () => {

    if (image.preview === '') {
      Swal.fire({
        icon: 'error',
        title: 'Tweet image is mandatory!'
      })
    } else if (content === '') {
      Swal.fire({
        icon: 'error',
        title: 'Content is mandatory!'
      })
    } else {
      setLoading(true);
      const imgRes = await handleImgUpload();
      const request = { content: content, image: `${API_BASE_URL}/files/${imgRes.data.fileName}` }
      // write api call to create tweet
      const postResponse = await axios.post(`${API_BASE_URL}/createtweet`, request, CONFIG_OBJ)
      setLoading(false);
      if (postResponse.status === 201) {
        navigate("/profile")
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Some error occured while creating tweets'
        })
      }
    }
  };

  const [allposts, setAllposts] = useState([]);

  const getAllPosts = async () => {
    console.log("getAllPosts");
    const response = await axios.get(`${API_BASE_URL}/alltweets`);

    if (response.status === 200) {
      setAllposts(response.data.tweets);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'some error occurred while getting all tweets'
      })
    }

  }
  useEffect(() => {
    getAllPosts();
  }, []);


  return (
    <div className='container'>
      <>
      <div className='row'>
        <div className='col-2 home-home' >
          <i className="fa-solid mt-2 icon fa-message"></i>
          <div className='mt-3'>
            <a href="home"><button className='button mt-5 fw-bold'><i class="fa-solid fa-house"></i> Home</button></a><br />
            <a href="profile"><button className='button mt-3 fw-bold'><i class="fa-solid fa-user"></i> Profile</button></a><br />
            <a href="login" onClick={() => logout} ><button className='button mt-3 fw-bold'><i class="fa-solid fa-right-from-bracket"></i> Logout</button></a><br />
            <button type='button' className='btn-btn fw-bold'><i className="fa-solid fa-circle-user mt-2"></i></button>
            <b className='ms-0'>John David</b><p className='ms-5'>@johndavid</p>
          </div>
        </div>
        <div className='col-5 mt-2 border user-part'>
          <div className='d-flex flex-row'>
            <h5 className='ms-2 mt-3 fw-bold'>Home</h5>
            <button className='tweet-button mt-3' onClick={handleShow}>Tweet</button>
          </div>
          {allposts.map((post) => {
            return (
              <div className='mt-3 ms-1 back'>
                <Card postData={post}/>
              </div>
            )
          })
          }
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {loading ? <div className='col-md-12 text-center'>
              <div className='spinner-border text-primary ' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div> : ''}
            <textarea onChange={(ev) => setContent(ev.target.value)} className="text-area" rows="4" cols="60" placeholder="Write the Tweet"></textarea></form>
          <input name="file" type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" onChange={handleFileSelect} />
          {image.preview && <img src={image.preview} width='400' height='400' alt='' />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addPost()}>
            Tweet
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    </div>
    
  )
}

export default Home;