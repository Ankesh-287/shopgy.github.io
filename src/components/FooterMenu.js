import React from 'react'

const FooterMenu = () => {
  return (
    <>
      <div className='footerMenu'>
        <div className="footerItems">
          <ul className='f-menu'>
            <li className='f-list'><p>Product</p></li>
            <li className='f-list'><a href="/">Home</a></li>
            <li className='f-list'><a href="\about">About</a></li>
            <li className='f-list'><a href="\pricing">Pricing</a></li>
            <li className='f-list'><a href="\services">Services</a></li>
          </ul>
        </div>
        <div className="footerItems">
          <ul className='f-menu'>
            <li className='f-list'><p>Company</p></li>
            <li className='f-list'><a href="\about">About Us</a></li>
            <li className='f-list'><a href="/">Carrers</a></li>
            <li className='f-list'><a href="/">Press</a></li>
            <li className='f-list'><a href="/">News</a></li>
          </ul>
        </div>
        <div className="footerItems">
          <ul className='f-menu'>
            <li className='f-list'><p>Resources</p></li>
            <li className='f-list'><a href="/">Blog</a></li>
            <li className='f-list'><a href="/">Newsletter</a></li>
            <li className='f-list'><a href="/">Events</a></li>
            <li className='f-list'><a href="/">Help Center</a></li>
          </ul>
        </div>
        <div className="footerItems">
          <ul className='f-menu'>
            <li className='f-list'><p>Legal</p></li>
            <li className='f-list'><a href="/">Terms</a></li>
            <li className='f-list'><a href="/">Privacy</a></li>
            <li className='f-list'><a href="/">Cookies</a></li>
            <li className='f-list'><a href="/">Setting</a></li>
          </ul>
        </div>
        <div className="footerItems">
          <ul className='f-menu'>
            <li className='f-list'><p>Social</p></li>
            <li className='f-list'><a href="/">Twitter</a></li>
            <li className='f-list'><a href="/">LinkedIn</a></li>
            <li className='f-list'><a href="/">Facebook</a></li>
            <li className='f-list'><a href="/">Github</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default FooterMenu
