import {useState} from 'react'
import './Profile.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container home-container'>
      <div className='row'>
        <div className='col-md-2 '>
          <i class="fa-solid mt-2 ms-2 icon fa-message"></i><br />
          <a href="home"><button type='button' className='button mt-5 fw-bold'>Home<i class="fa-solid ms-2 fa-house"></i></button></a><br/>
          <a href="profile"><button type='button' className='button mt-3 fw-bold'>Profile<i class="fa-solid ms-2 fa-user"></i></button></a><br/>
          <a href="login"><button type='button' className='button mt-3 fw-bold'>Logout<i class="fa-solid ms-2 fa-right-from-bracket"></i></button></a>
        <div className='row user-profile'>
          <div className='col-md-2'>
            <button type='button' className='btn-btn fw-bold'><i class="fa-solid fa-circle-user mt-2"></i></button>
          </div>
          <div className='col-md-10'>
            <b className='ms-2'>John David</b><p className='ms-2'>@johndavid</p>
          </div>
        </div>
        </div>
        <div className='col-md-5 border'>
          <div className="card shadow card-profile" >
            <h5 className='ms-2 mt-2'>Profile</h5>
          <div className='bg ms-2 mt-2'>
          <img className='logger-pic ms-4' alt='profile' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            <div className='row'>
              <div className='col-5'>
                <h6 className='ms-2 mt-2'>John David</h6>
                <p className='ms-2'>@johndavid</p>
                <p><i class="fa-solid fa-calendar-days ms-2"></i> Date Wed March 2005</p>
                <p><i class="fa-regular fa-calendar ms-2"></i> Joined Sat April 2003</p>
                <p className='ms-2 fw-bold'>1 Following   0 Followers</p> 
              </div>
              <div className='col-md-7'>
                <button className='upload-photo fw-bold' onClick={handleShow}><span>Upload Profile Photo</span></button>
                <button className='edit m-2 fw-bold' onClick={handleShow}><span>Edit</span></button>
                <p className="location"><i class="fa-solid fa-location-dot"></i> Location, India</p>
              </div>
            </div>
            <div className='fw-bold text-center'>Tweets and Replies</div>
            <div className='row '>
              <div className='col-12 border border-replies'>
                <div className='row'>
                  <div className='col-9'>
                    <div className='row'>
                      <div className='col-3'>
                      <img className='twitter-pic' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
                      </div>
                      <div className='col-9'>
                        <p className='fw-bold mt-1 twit-user'>@johndavid </p>
                        <p className='twit-dates'>- Fri Feb 2004</p>
                        <p className='twit-user'>Follow me on Twitter </p>
                        <i class=" fa-sharp fa-regular fa-heart"></i> 2
                        <i class="ms-5 fa-regular fa-comment"></i> 3
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className='col-12 border border-replies'>
                <div className='row'>
                  <div className='col-9'>
                    <div className='row'>
                      <div className='col-3'>
                      <img className='twitter-pic' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
                      </div>
                      <div className='col-9'>
                        <p className='fw-bold mt-1 twit-user'>@johndavid </p>
                        <p className='twit-dates'>- Wed May 2004</p>
                        <p className='twit-user'>I laeving from London </p>
                        <i class=" fa-sharp fa-regular fa-heart"></i> 2
                        <i class="ms-5 fa-regular fa-comment"></i> 3
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 border border-replies'>
                <div className='row'>
                  <div className='col-9'>
                    <div className='row'>
                      <div className='col-3'>
                      <img className='twitter-pic' alt='twit' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
                      </div>
                      <div className='col-9'>
                        <p className='fw-bold mt-1 twit-user'>@johndavid </p>
                        <p className='twit-dates'>- Sun Jan 2004</p>
                        <p className='twit-user'>It's me David </p>
                        <i class=" fa-sharp fa-regular fa-heart"></i> 2
                        <i class="ms-5 fa-regular fa-comment"></i> 3
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
                      </div>
                    </div>
                  </div>
                  <div className='col-3'>
                    <button className='mt-2 trash'><i class="fa-solid fa-trash-can"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <b>Name</b><br/>
        <input type='text' placeholder='Name' className='edit-name'/>
        
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
    </div>  
  )
}

export default Profile




<hr className='text-muted ms-4' style={{width: '90%'}}></hr>
                    <div className='col-1 '>
                    <img className='profile-pic ms-1 mt-2' alt='profile' src='https://images.unsplash.com/photo-1684166251886-5c4fbb1d3c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
                    </div>
                    <div className='col-11 '>
                        <i class="fa-solid retweet fa-retweet ms-3 mt-1 retweet-icon"></i>  Retweeted by Merry<br />
                        <p className='ms-3 retweeted-icon text-bold'>@davidmerry</p>
                        <p className='ms-3 retweeted-icon text-bold'>The London Bridge was awesome</p>
                        <i class="ms-5 fa-sharp fa-regular fa-heart"></i> 1
                        <i class="ms-5 fa-regular fa-comment"></i> 3
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 2<br />
                    </div>
                    <hr className='text-muted ms-4' style={{width: '90%'}}></hr>
                    <div className='col-1 '>
                        <img className='profile-pic ms-1 mt-2' alt='profile' src='https://images.unsplash.com/photo-1683973122992-dcdf1569523d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                    </div>
                    <div className='col-11'>
                        <i class="fa-solid retweet fa-retweet ms-3 mt-1 retweet-icon"></i>  Retweeted by John<br />
                        <p className='ms-3 retweeted-icon text-bold'>@johnsmith</p>
                        <p className='ms-3 retweeted-icon text-bold'>The London Bridge was Fantastic</p>
                        <i class="ms-5 fa-sharp fa-regular fa-heart"></i> 4
                        <i class="ms-5 fa-regular fa-comment"></i> 6
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 1<br />
                    </div>
                    <hr className='text-muted ms-4' style={{width: '90%'}}></hr>
                    <div className='col-1'>
                        <img className='profile-pic ms-1 mt-2' alt='profile' src='https://images.unsplash.com/photo-1683488780092-1643c389aace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
                    </div>
                    <div className='col-11'>
                        <i class="fa-solid retweet fa-retweet ms-3 mt-1 retweet-icon"></i>  Retweeted by Fleming<br />
                        <p className='ms-3 retweeted-icon text-bold'>@fleming</p>
                        <p className='ms-3 retweeted-icon text-bold'>The Bridge was superbb..</p>
                        <i class="ms-5 fa-sharp fa-regular fa-heart"></i> 2
                        <i class="ms-5 fa-regular fa-comment"></i> 3
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 5<br />
                    </div>
                    <hr className='text-muted ms-4' style={{width: '90%'}}></hr>