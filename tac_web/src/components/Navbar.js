import { Component } from 'react';
import taclogo_icon from '../images/taclogo.ico'
import './NavbarStyles.css';

class Navbar extends Component {
    state = { clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
  return (

    <>
    <nav>
        <div>
            <img src={taclogo_icon} alt="" />   
        </div>
        <div>
            <ul id='navbar' className={this.state.clicked? '#navbar active' : '#navbar'}>
                <CustomLink href='/'>Home</CustomLink>
                <CustomLink href='/event'>Event</CustomLink>
                <CustomLink href='/upload'>Tithe</CustomLink>
                <CustomLink href='/about'>About</CustomLink>
                <CustomLink href='/contact'>Contact</CustomLink>
                <CustomLink href='/login'>Login</CustomLink>
            </ul>
        </div>
        <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked? 'fas fa-times' :
            'fas fa-bars'}></i>
        </div>
    </nav>
    
    </>
  )
}
}
export default Navbar

function CustomLink({href,children,...props}){
    const path = window.location.pathname
    return(
        <li>
         <a href={href} {...props} className={path === href? "active":""}>{children}</a>
        </li>
       
    )
}