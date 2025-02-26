import '../assets/scss/layout/_header.scss'
import '../assets/images/logo.png'

const Header = () => {
  

  return (
    <header className="header">
      <div className="header-container">
      <div className="ann-menu container-fluid d-flex align-items-center justify-content-between px-4 py-1">


        <div className="lang-container d-flex">
          <button className='lang d-flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342"><path fill="#ef3340" d="M0 0h513v342H0z"/><path fill="#00b5e2" d="M0 0h513v114H0z"/><path fill="#509e2f" d="M0 228h513v114H0z"/><g fill="#FFF"><path d="M265.6 212.6c-23 0-41.6-18.6-41.6-41.6s18.6-41.6 41.6-41.6c7.2 0 13.9 1.8 19.8 5-9.2-9-21.9-14.6-35.8-14.6-28.3 0-51.2 22.9-51.2 51.2s22.9 51.2 51.2 51.2c13.9 0 26.6-5.6 35.8-14.6-5.9 3.2-12.6 5-19.8 5z"/><path d="m297.6 142.2 5.5 15.5 14.9-7.1-7.1 14.9 15.5 5.5-15.5 5.5 7.1 14.9-14.9-7.1-5.5 15.5-5.5-15.5-14.9 7.1 7.1-14.9-15.5-5.5 15.5-5.5-7.1-14.9 14.9 7.1z"/></g></svg>AZERBAIJAN / AZN</button>
        </div>


        <div className="sponsor">
          <a href="">Discover more | adidas x Mercedes-AMG F1</a>
        </div>


        <div className="theme d-flex">
          <button>Dark Mode</button>
        </div>



      </div>




      <nav className="navbar bg-body-dark py-4 px-3 align-items-center">
        <div className="container-fluid navbar-dark">
          <div className="logo-conatiner">
          <img className="logo" src="src/assets/images/logo.png" width={"195px"} />
        </div>
      <div className="header-dropdown d-flex align-items-center">
      <ul className="Dropdown-Items d-flex">
          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href="">Teamwear</a>
          </li>

          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href="">Fanwear</a>
          </li>

          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href="">George Russell</a>
          </li>

          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href="">Kimi Antonelli</a>
          </li>

          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href="">Collections</a>
          </li>

          <li className='Dropdown-Item'>
            <a className='Dropdown-Link' href=""> Sale</a>
          </li>
        </ul>
      </div>

      <div className="banner-items d-flex align-items-center">
      <div className="searchContainer">
        <form className='SearchForm d-flex'>
          <div className="SearchField">
            <input type="text" placeholder='Search' maxLength={128} id='header-search' className="SearchInput" />
            <label htmlFor="header-search" className='SearchLabel'>Search</label>
          </div>
        <button><svg className="iconSearch" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="currentColor" fillRule="evenodd" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="m12.854 12.146 4.5 4.5-.707.708-4.5-4.5.707-.707Z" clipRule="evenodd" /></svg>
</button>
        </form>
      </div>

      <div className="banner-icons d-flex">
        <a href="" className="icon banner-icon d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path className="ico-Wishlist_Middle" fill="transparent" fillRule="evenodd" d="M.5 6.143a4.643 4.643 0 0 1 8.214-2.965 4.643 4.643 0 0 1 8.214 2.965c0 1.282-.566 2.398-1.36 3.283-.822.918-2.536 2.687-4.044 4.226a609.753 609.753 0 0 1-2.455 2.49.5.5 0 0 1-.71 0 717.66 717.66 0 0 1-2.455-2.49c-1.508-1.54-3.221-3.308-4.044-4.226C1.066 8.54.5 7.425.5 6.143Z" clipRule="evenodd" /><path className="ico-Wishlist_Outer" fill="currentColor" fillRule="evenodd" d="M5.143 2A4.143 4.143 0 0 0 1 6.143c0 1.127.497 2.129 1.232 2.949.814.908 2.52 2.668 4.03 4.21a611.137 611.137 0 0 0 2.452 2.488 637.037 637.037 0 0 0 2.453-2.488c1.51-1.542 3.215-3.302 4.03-4.21.735-.82 1.232-1.822 1.232-2.95a4.143 4.143 0 0 0-7.33-2.645.5.5 0 0 1-.77 0A4.13 4.13 0 0 0 5.144 2Zm3.571 14.5-.354.352-.228-.229a566.813 566.813 0 0 1-2.585-2.622c-1.505-1.536-3.227-3.313-4.06-4.241C.637 8.81 0 7.58 0 6.143a5.143 5.143 0 0 1 8.714-3.7 5.143 5.143 0 0 1 8.714 3.7c0 1.437-.635 2.666-1.487 3.617-.832.928-2.554 2.705-4.06 4.241a602.406 602.406 0 0 1-2.585 2.623l-.227.228-.355-.352Zm0 0 .355.352a.5.5 0 0 1-.71 0l.355-.352Z" clipRule="evenodd" /></svg>

        </a>
        <a href="" className="icon banner-icon d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="currentColor" fillRule="evenodd" d="M13.186 6.5H4.76a2 2 0 0 0-1.993 1.834l-.68 8.166h13.82l-.729-8.177A2 2 0 0 0 13.186 6.5Zm2.989 1.734A3 3 0 0 0 13.186 5.5H4.76a3 3 0 0 0-2.99 2.75L1 17.5h16l-.825-9.266Z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M9 2.5A2.5 2.5 0 0 0 6.5 5v3.5h-1V5a3.5 3.5 0 1 1 7 0v3.5h-1V5A2.5 2.5 0 0 0 9 2.5Z" clipRule="evenodd" /></svg>

        </a>
        <a href="" className="icon banner-icon d-flex justify-content-center align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="currentColor" fillRule="evenodd" d="M9.48 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3.434 12.008A3.5 3.5 0 0 1 6.79 9.5h5.427a3.5 3.5 0 0 1 3.365 2.539l1.378 4.824-.961.274-1.379-4.824a2.5 2.5 0 0 0-2.403-1.813H6.79a2.5 2.5 0 0 0-2.397 1.791l-1.434 4.85L2 16.859l1.434-4.85Z" clipRule="evenodd" /></svg>

          </a>

          <a href="" className="dropdown-element banner-icon d-flex justify-content-center align-items-center">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="M1 2h16v1H1zM1 16h16v1H1zM1 9h16v1H1z" /></svg>


          </a>
      </div>
      </div>
 
      </div>
      </nav>
      </div>
    </header>
    

  );
};

export default Header;
