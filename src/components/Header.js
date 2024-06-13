import React, {useState} from 'react'
import '../style/Header.css';

const logo = "https://i.pinimg.com/474x/27/90/cd/2790cd967304e6cdc4267ae9a0d67b2b.jpg"
const cart =<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M292-120q-38 0-65-27.5T200-213v-371l-73-176H40v-80h141l66 160h591q23 0 35 19t1 39L760-399q51 8 85.5 47t34.5 92q0 58-40.5 99T741-120q-59 0-99.5-41T601-260q0-20 5-37t14-33l-131-12-120 180q-13 20-33.5 31T292-120Zm382-285 99-195H280l50 120q8 20 25.5 33.5T396-431l278 26ZM293-201q2 0 9-5l97-144q-49-5-77-23.5T280-412v200q0 5 4 8t9 3Zm447 1q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T680-260q0 25 17.5 42.5T740-200Zm-66-205-278-26 278 26Z"/></svg>
const user =<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const toggle = () =>{
    setIsMenu(prevState => !prevState);
  }
  return (
    <>
      <div className='header'>
        <div className="menu">
          <img className="logo" src={logo} alt="logo" />
          <ul className='h-menu'>
            <li className='h-list'><a href="/">Home</a></li>
            <li className='h-list'><a href="/shop">Shop</a></li>
            <li className='h-list'><a href="/contact">Contact</a></li>
            <li className='h-list'><a href="/about">About Us</a></li>
          </ul>
        </div>
        <div className="options">
            <div className="icons">{cart}</div>
            <div className="cart-count">5</div>
            <div className="icons" onClick={toggle}>{user}</div>
        </div>
        <div className={`user-menu ${isMenu ? 'show' : ''}`}>
          <div className="user-panel">
            <a href="/login">Log In</a>
            <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
