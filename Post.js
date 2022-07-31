import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Post({profilePic, image, username, timestamp, message}) {
  return <div className='post'>
      <div className="post__top">
          <Avatar src={profilePic}
          className="post__avatar" />
          <div className="post__topInfo">
              <h3>{username}</h3>
              <p>Timestamp...</p>
          </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div> 

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
          <div className="post__option">
              <ThumbUpIcon />
              <p>Like</p>
          </div> 

          <div className="post__option">
              <ChatBubbleOutlineOutlinedIcon />
              <p>Comment</p>
          </div> 
          
          <div className="post__option">
              <NearMeIcon />
              <p>Share</p>
          </div> 

          <div className="post__option">
              <AccountCircle />
              <ExpandMoreOutlinedIcon />
          </div> 
      </div>
      

  </div>;
}

export default Post;
