import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { authentication } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from './reducer';
import {useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re)=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: re.user,
            })
            console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
    };

  return <div className='login'>
      <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            alt=""
           />
           <img 
            src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
            alt=''
           />   
      </div>

      <Button type='submit' onClick={signIn}
      >
          Sign In
      </Button>
  </div>;
}

export default Login;
