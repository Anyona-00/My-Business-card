import React from 'react';
import Twiter from './Twitter Icon.png';
import Facebook from './Facebook Icon.png'
import Instagram from './Instagram Icon.png'
import GitHub from './GitHub Icon.png'




  function Footer(){
    return(
       <div className='footer'>
<img src={Twiter} alt="Twiter icon" />
<img src={Facebook} alt="Facebook icon" />
<img src={Instagram} alt="Instagram icon" />
<img src={GitHub} alt="GitHub icon" />

       </div>
    )
}

export default Footer;