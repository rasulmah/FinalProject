import 'react'
import "../assets/scss/_footer.scss"


const Footer = () => {
  return (
    <footer className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='footer-container d-flex justify-content-between flex-column align-items-center'>
        <div className="logo-f">
          <img src="/src/assets/images/logo.png" alt="logo" />
        </div>


        <div className="content-container align-items-center d-flex">
          <ul className='content d-flex align-items-center flex-column justify-content-between'>
            <li className='content-item d-flex'>
              <button className='d-flex justify-centent-between align-items-center' href="">Drivers 
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 5"><path d="M2.56699 4.25c.19245.33333.67357.33333.86602 0l1.73205-3C5.35751.916667 5.11695.5 4.73205.5h-3.4641C.883049.5.642487.916667.834937 1.25l1.732053 3Z" fill="currentColor" /></svg></button>
            </li>
            <li className='content-item d-flex'>
              <button className='d-flex justify-centent-between align-items-center' href="">Support<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 5"><path d="M2.56699 4.25c.19245.33333.67357.33333.86602 0l1.73205-3C5.35751.916667 5.11695.5 4.73205.5h-3.4641C.883049.5.642487.916667.834937 1.25l1.732053 3Z" fill="currentColor" /></svg></button>
            </li>
            <li className='content-item d-flex'>
              <button className='d-flex justify-centent-between align-items-center' href="">Brand<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 5"><path d="M2.56699 4.25c.19245.33333.67357.33333.86602 0l1.73205-3C5.35751.916667 5.11695.5 4.73205.5h-3.4641C.883049.5.642487.916667.834937 1.25l1.732053 3Z" fill="currentColor" /></svg></button>
            </li>
            <li className='content-item d-flex'>
              <button className='d-flex justify-centent-between align-items-center' href="">Driver cards<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 5"><path d="M2.56699 4.25c.19245.33333.67357.33333.86602 0l1.73205-3C5.35751.916667 5.11695.5 4.73205.5h-3.4641C.883049.5.642487.916667.834937 1.25l1.732053 3Z" fill="currentColor" /></svg></button>
            </li>
          </ul>
        </div>

        <div className="media-container d-flex flex-column align-items-center justify-content-between" >


        <div className="socials-container d-flex">

          <ul className='socials d-flex justify-space-between align-items-center'>
            <li className='social'>
              <a className='social-link' href=""><i className="fa-brands fa-facebook" /></a>
            </li>
            <li className='social'>
              <a className='social-link' href=""><i className="fa-brands fa-instagram" /></a>
            </li>
            <li className='social'>
              <a className='social-link' href=""><i className="fa-brands fa-x-twitter" /></a>
            </li>
            <li className='social'>
              <a className='social-link' href=""><i className="fa-brands fa-youtube" /></a>
            </li>
            <li className='social'>
              <a className='social-link' href=""><i className="fa-brands fa-weibo" /></a>
            </li>
          </ul>

        </div>

        <button className='btn-top d-flex align-items-center justify-content-center'>
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="m1.146 6.328 3.182-3.182a.5.5 0 0 1 .708 0l3.182 3.182a.5.5 0 1 1-.708.707L4.975 4.5h-.586L1.854 7.035a.5.5 0 1 1-.708-.707Z" /></svg></a>
        </button>

        <div className="footer-nav-container d-flex">
          <ul className='footer-nav d-flex justify-content-between align-items-center'>
            <li className='footer-nav-item'><a className='footer-nav-link' href="">Terms & Conditions</a></li>
            <li className='footer-nav-item'><a className='footer-nav-link' href="">Delivery</a></li>
            <li className='footer-nav-item'><a className='footer-nav-link' href="">Returns</a></li>
            <li className='footer-nav-item'><a className='footer-nav-link' href="">Privacy Policy</a></li>
            <li className='footer-nav-item'><a className='footer-nav-link' href="">Cookie Policy</a></li>
          </ul>
        </div>

        </div>
      </div>
    </footer>
    
  )
}

export default Footer