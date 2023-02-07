import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../imag/mern1.png';
import {BsPerson, BsPersonBadgeFill, BsSearch} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavLink} from 'react-router-dom';
function NavScrollExample({setToggleSignUp,setToggleSignIn}) {
 
 return (<>
         <Navbar collapseOnSelect expand="lg"  variant="light" className="navv" sticky='top'>
          <Container >
            <Navbar.Brand  ><div className='navv1'><img src={logo}  /></div></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link   className="me-5 "><NavLink to="/" className="navtext" >Home</NavLink></Nav.Link>
        
                <Nav.Link className=""><NavLink    to="/signup"    className="navtext" onClick={()=>setToggleSignUp(true)}>Login</NavLink></Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link><span className='inpt m-0'><input type="text" placeholder="search"/> <BsSearch size={20} > </BsSearch> </span> </Nav.Link>
                <Nav.Link eventKey={2} >
                <NavLink to="/signin"> <BsPerson size={30} onClick={()=>setToggleSignIn(true)}></BsPerson></NavLink>
                 
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
    
};



export default NavScrollExample;