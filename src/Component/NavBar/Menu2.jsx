import React from 'react'
import './Nav2.css'
import bagi_wave from '../../images/bagi_wave.png';
import bagi_wave1 from '../../images/bagi_wave1.png';
import { Navbar,NavLink } from 'react-bootstrap';
const Menu2 =()=>{
return(
     <div className="content" >
         <Navbar  bg="myRead" className="content" expand="sm" collapseOnSelect>
            <div >
            <img src={bagi_wave1} alt="bagi_wave1"/>
              <span class="head"> Bharati AXA Genenral Insurance is now part of ICICI Lombard General Insurance.</span>
                <img src={bagi_wave} alt="bagi_wave"/> 
                   <a href="#know.more">Know.more</a>
            </div>
</Navbar>
</div>
   

)
}

export default Menu2