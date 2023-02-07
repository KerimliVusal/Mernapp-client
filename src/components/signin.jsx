import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Login, Signin } from '../axios'
import '../components/style.scss'
import letter from './FormIcons/letter2.png'
import lock from './FormIcons/lock2.png'
import user from './FormIcons/user2.png'
function SignInForm({setToggleSignIn,toggleSignIn,userData,setuserData}) {
  const [eyeToggle,SetEyeToggle]=useState(false)
  const [formdata,setFormdata]=useState({
    email:'',
    password:''
  })
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    // const home=document.querySelector('.home')
    Signin(formdata).then((res)=>setuserData(res.data))
    .catch(err=>console.log(err))
   if(userData!=''){
    alert('You Sign In sucessfully!')
    navigate("/")
   }
  }
  return (<div className='siginback'> 
    <div className='siginback1'></div>
    <div className={toggleSignIn? "signUpForm show":"signUpForm"}>
        <span className="closeForm" onClick={()=>setToggleSignIn(false)}>&times;</span>
          <div className="ribbon">
          
          <span>Welcome 
            <div className="ribbonSwiper">&nbsp;</div>
          </span>
        </div>
      
      <div className="FormText">
      <h1 className="mb-24">Sign In</h1>

    <form autoComplete="off">
        <div className="LetterInpContainer">
          <input className="LetterInput" type="email" name="" placeholder="Email" id="email"
          onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
          />
          <img src={letter} alt=""/>
        </div>
        <div className="PasswordInpContainer">
          <input className="PasswordInput" type={eyeToggle?"text":"password"} placeholder="Password" name="" id="Password"
          onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
          <img src={lock} alt=""/>
          <span className="Eye" onClick={()=>SetEyeToggle(!eyeToggle)}><i className={eyeToggle?"fas fa-eye ":"fas fa-eye fa-eye-slash"}></i></span>
        </div>
        <label htmlFor="AgreeTerms" className="checkboxLabel mb-20" id="btns">
          <input type="checkbox" name="" className="checkbox" id="AgreeTerms"/>
         i'm agree &nbsp;<a className="FormLinks" href="">With Rules and conditions</a>
        </label>
        <button className="btn-Account" id="btns" onClick={(e)=>handleSubmit(e)}>Create an Account
            <div className="ribbonSwiper">&nbsp;</div>
        </button>
        <span className="AlreadyHave">Forgot password?</span>
    </form>
  </div>
   </div>
   </div>
  )
}

export default SignInForm