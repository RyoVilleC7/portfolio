import React from 'react';

import Glogo from '../../assets/image/GitHub-logo.svg';

const GithubLogo = ()=>{
    return(
        <a href="https://github.com/RyoVilleC7/portfolio" target="_blank" className="sns-logo hov">
            <img src={Glogo}/>
        </a>
    )
}

export default GithubLogo;