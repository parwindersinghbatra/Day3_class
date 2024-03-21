import './Navbar.css';
import Button from './Button';
import Logo from './../images/logo.svg'
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <>
        <nav className="navbar">
            <div>
                {/* Brand Logo */}
                
                <span className='logo'> <img src={Logo} />GeekFood</span>
                </div>
                <div className='nav-links'>
                        <div><NavLink to='/'>Home</NavLink></div>
                       <div><NavLink to='/Quote'>Quote</NavLink></div>
                       <div><NavLink to='/Restaurent'>Restaurent</NavLink></div>
                       <div><NavLink to='/Foods'>Foods</NavLink></div>
                       <div><NavLink to='/Contact'>Contact</NavLink></div>
                    </div>
                    
                <div>
                <Button borderRadius={"5px"} fontColor={"#FFFFFF"} backgroundColor={"#1C4DE8"} padding={"0.7rem 1.5rem"} >Get Started</Button>
                    {/* <Button borderRadius={"5px"} fontColor={"#FFFFFF"} backgroundColor={"#FF0000"}>Know More</Button>
                    <Button borderRadius={"5px"} fontColor={"#FF0000"} backgroundColor={"#000000"}>Started</Button> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar;