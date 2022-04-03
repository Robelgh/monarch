

function Navbar() {
  return (
    <>

     
<div className="navbar">
 
 <div className="site-title">MUO</div>
    <ul>
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" className="hamburger">&#9776;</label>
          <div class="menu" >
          
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li class="services">
                <span className='area'>
                  <a href="#">Services</a> *
{/*                      
                  <div class="dropdown">
                      <ul>
                          <li><a href="/">Dropdown 1 </a></li>
                          <li><a href="/">Dropdown 2</a></li>
                          <li><a href="/">Dropdown 2</a></li>
                          <li><a href="/">Dropdown 3</a></li>
                          <li><a href="/">Dropdown 4</a></li>
                      </ul>
                  </div> */}
                  </span>  
              </li>
              <li className='prices'><a href="/">Pricing</a>
              </li>
              <li><a href="/">Contact</a></li>
          </div>
 
</ul>
</div>
  
  </> 
  );
}

export default Navbar;
