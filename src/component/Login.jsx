import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[user,SetUser]=useState(null);
    
    const LoginAccount=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
          //userCredentials value are returned by signInWithEmail.. Fucntion
            const loggedUser=userCredentials.user;
            SetUser(loggedUser);
            //if error thrown by function
        }).catch((error) => {
            console.error('Login Error:', error);
        });
    }

    const logOut = ()=>{
      //signOut Firebase function to sign out
      signOut(auth)
      .then(()=>{
        SetUser(null);
        console.log("Sign out");
      }).catch((error)=>{
        console.log(error);
      })
    }

  useEffect(()=>{
                            //this fucntion listen for changes in authenctication
                             //whenever user log in or log out
    const unsubscribe = auth.onAuthStateChanged((user)=>{
      if(user){
        SetUser(user);
      }
      else{
        SetUser(null);
      }
    });

    return ()=>unsubscribe();

  },[])  

  return (
    <div>
      <form onSubmit={LoginAccount}>
        <h1>Login</h1>
        <input type="email" placeholder='Username' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password"  placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
      {user?
      
      //only if user is present then only give user.email and log out button
      (<div>
      <p>Welocome ,{user.email}</p>
      <button onClick={logOut}>Log out</button>
      </div>):
      
      (<p>You are not logged in</p>)}
    </div>
  )
}
