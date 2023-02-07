import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { Login } from '../axios'
import '../components/style.scss'
import letter from './FormIcons/letter2.png'
import lock from './FormIcons/lock2.png'
import user from './FormIcons/user2.png'
function SignUpForm({toggleSignUp,setToggleSignUp,setuserData,userData}) {
  const [eyeToggle,SetEyeToggle]=useState(false)
  const navigate=useNavigate()
  const [formdata,setFormdata]=useState({
    fullName:'',
    email:'',
    password:''
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
    Login(formdata).then((res)=>setuserData(res.data.fullName))
    .catch(err=>console.log(err))
    
    if (userData.fullname!=''){
      alert('You Sign up sucessfully!')
       navigate("/")
      }
      
  }

  return (<div className='siginback'>
    <div className={toggleSignUp? "signUpForm show":"signUpForm"}>
        <span className="closeForm" onClick={()=>setToggleSignUp(false)}>&times;</span>
          <div className="ribbon">
          
          <span>Welcome 
            <div className="ribbonSwiper">&nbsp;</div>
          </span>
        </div>
      
      <div className="FormText">
      <h1 className="mb-24">Sign Up</h1>

    <form autoComplete="on">
        <div className="NameInpContainer">
          <input className="nameInput" type="text" name="name"  placeholder="User's Name" id="Name" 
          onChange={(e)=>setFormdata({...formdata,fullName:e.target.value})}
          />
          <img src={user} alt=""/>
        </div>
        <div className="LetterInpContainer">
          <input className="LetterInput" type="email" name="email" placeholder="Email" id="email" 
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
        <label htmlFor="AgreeTerms" className="checkboxLabel mb-20">
          <input type="checkbox" name="" className="checkbox" id="AgreeTerms"/>
         i'm agree &nbsp;<a className="FormLinks" href="">With Rules and conditions</a>
        </label>
        <button className="btn-Account" onClick={(e)=>handleSubmit(e)}>Create an Account
            <div className="ribbonSwiper">&nbsp;</div>
        </button>
        <span className="AlreadyHave">Already have an account? <NavLink to="/signin">Sign in</NavLink>  </span>
    </form>
  </div>
   </div>

   </div>
  )
}

export default SignUpForm