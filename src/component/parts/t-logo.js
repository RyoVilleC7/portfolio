import React from 'react';

import Tlogo from '../../assets/image/Twitter-logo.svg';

const TwitterLogo = ()=>{
    return(
            <a href="https://twitter.com/Ryotaro_WAVES" target="_blank" className="sns-logo hov">
                <img src={Tlogo}/>
            </a>
    )
}

export default TwitterLogo;