import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header() {
    return (
        <div className = "Header container">
            <div className = "ten columns">
             . sagnik
            </div>
           <div className = "" >
           <img className={style.profile} src="https://avatars0.githubusercontent.com/u/28679360?s=460&u=043e532cfc62169437853995504c073352eca53f&v=4" alt="Imanol Suarez Foto" />
            <p className={style.username}>
            Hi👋
            </p>
             </div>
            {/* <div className = "two columns">
                <button>
                    <feather className="icons sun"></feather>
                </button>
            </div> */}
        </div>
    )
}

export default Header
