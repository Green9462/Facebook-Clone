import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return <div className='feed'>
      <StoryReel />
      <MessageSender />
      <Post 
        profilePic="https://www.swiftdigital.com.au/wp-content/uploads/2021/06/free-online-photo-editors.jpg"
        message="THIS IS TOO DOPE !!!"
        timestamp="This is a timestamp"
        username="Jay"
        image="https://memegenerator.net/img/instances/42970028/enough-talk-lets-code.jpg"
      />
      <Post 
        profilePic
        message="TOO FUNNY !!!"
        timestamp="This is a timestamp"
        username="Austin"
        image="https://www.memesmonkey.com/images/memesmonkey/b8/b80055fd8448d8854b89e21f569869e7.jpeg"/>
  </div>;
}

export default Feed;
