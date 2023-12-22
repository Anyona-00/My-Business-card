import React from 'react';
import Pic from './profile-pic.jpg';

function Info(){
    return(
        <div className='info'>
        <img src={Pic} alt="pprofile pic" className='pic' />
        <h1 className='name'>Shadrack Anyona</h1>
        <h3 className='work'>FrontEnd Developer</h3>
        <a href="https://anyona-00.github.io/Personal-Portfolio/"className='portfolio' >Anyona.website</a>
        <div className="button-container">
            <button className='btn'>Email</button>
            <button className='btn'>LinkedIn</button>
        </div>
        </div>
    )
}

export default Info;
