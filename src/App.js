
import SignUpForm from './components/signup';
import { useEffect, useState } from 'react';
import { Route,Routes, useNavigate } from 'react-router';
import Home from './components/home';
import NavScrollExample from './components/navbar';
import SignInForm from './components/signin';

function App() {
  const[toggleSignUp,setToggleSignUp]=useState(true)
  const[toggleSignIn,setToggleSignIn]=useState(false)
  const[userData,setuserData]=useState({
    fullname:''
  })
  const navigate=useNavigate()
  // useEffect(()=>{
  //   const home=document.querySelector('.home')
  // //  home.style.opacity='1'
  // if(userData){
  //   home.style.opacity='1'
  // }
  // },[userData]) 
  useEffect(()=>{
    const home=document.querySelector('.home')
    setTimeout(()=>{
      alert('Please Log into your account')
       home.style.opacity='0.5'
       navigate("/signup")
          },2000)
  },[])
  return (
    <div className="App">
      <NavScrollExample setToggleSignUp={setToggleSignUp} toggleSignIn={toggleSignIn} setToggleSignIn={setToggleSignIn}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUpForm setToggleSignUp={setToggleSignUp} toggleSignUp={toggleSignUp} setuserData={setuserData} userData={userData}/>}/>
        <Route path='/signin' element={<SignInForm setToggleSignIn={setToggleSignIn} toggleSignIn={toggleSignIn} setuserData={setuserData} userData={userData}/>}/>
      </Routes>
      {/* <SignUpForm setToggleSignUp={setToggleSignUp} toggleSignUp={toggleSignUp}/> */}
    </div>
  );
}

export default App;
