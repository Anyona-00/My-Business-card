import React from 'react';
import Pic from './profile-pic.jpg';

function Info(){
    return(
        <div>
        <img src={Pic} alt="pprofile pic" className='pic' />
        <h1>Shadrack Anyona</h1>
        <h3>FrontEnd Developer</h3>
        <a href="https://anyona-00.github.io/Personal-Portfolio/">Portfolio</a>
        <div className="btn">
            <button>Email</button>
            <button>Email</button>
        </div>
        </div>
    )
}

export default Info;
