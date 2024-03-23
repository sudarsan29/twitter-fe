import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div>
            <div className="card shadow card-container" >
                <div className='row'>
                    <div className='col-1'>
                        <img className='profile-pic ms-1 mt-4' alt='profile' src='https://images.unsplash.com/photo-1683973122992-dcdf1569523d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                    </div>
                    <div className='col-11 '>
                        <i class="fa-solid retweet fa-retweet ms-3 mt-3 retweet-icon"></i> Tweeted by  <br />
                        <p className='ms-3 retweeted-icon text-bold'>@</p>
                        <p className='ms-3 me-1'>{props.postData.content}</p>
                        <img className='tweet-pic ms-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/London_Bridge_from_St_Olaf_Stairs.jpg/420px-London_Bridge_from_St_Olaf_Stairs.jpg' alt='tweet-pic' /><br />
                        <i class="ms-5 fa-sharp fa-regular fa-heart"></i> 3
                        <i class="ms-5 fa-regular fa-comment"></i> 4
                        <i class="ms-5 fa-solid fa-retweet retweeticon"></i> 2<br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;