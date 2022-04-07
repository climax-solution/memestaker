import { useState } from "react";
import { Link } from "react-router-dom";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";

setDefaultBreakpoints([
    { xs: 0 },
    { l: 1199 },
    { xl: 1200 }
]);

export default function Header () {

    const [showmenu, btn_icon] = useState(false);

    return (
        <header id="myHeader" className='navbar white mt-5'>
            <div className="container">
            <div className='logo px-0'>
                <div className='navbar-title navbar-item p-0'>
                <Link to="/">
                    <img
                    src="/img/logo.png"
                    className="img-fluid d-block light-logo"
                    alt="#"
                    />
                </Link>
                </div>
            </div>
            <BreakpointProvider>
                <Breakpoint l down>
                {showmenu && 
                    <div className='menu'>
                    <div className='navbar-item'>
                        <a href="/">
                        Audit
                        <span className='lines'></span>
                        </a>
                    </div>
                    <div className='navbar-item'>
                        <a href="/">
                        Discord
                        <span className='lines'></span>
                        </a>
                    </div>
                    <div className='navbar-item'>
                        <a href="/">
                        Twitter
                        <span className='lines'></span>
                        </a>
                    </div>
                    <div className='navbar-item'>
                        <a href="/">
                        Contract
                        <span className='lines'></span>
                        </a>
                    </div>
                    <div className='navbar-item'>
                        <a href="https://docs.google.com/document/d/1F7sYi49ajXfzlTbGj46Q7s2F0hkVBUKgdQWCfL6fkdU/edit?usp=sharing" target="_blank" rel="noreferrer">
                        Docs
                        <span className='lines'></span>
                        </a>
                    </div>
                    </div>
                }
                </Breakpoint>

                <Breakpoint xl>
                <div className='menu'>
                    <div className='navbar-item'>
                    <a href="/">
                        Audit
                        <span className='lines'></span>
                    </a>
                    </div>
                    <div className='navbar-item'>
                    <a href="/">
                        Discord
                        <span className='lines'></span>
                    </a>
                    </div>
                    <div className='navbar-item'>
                    <a href="/">
                        Twitter
                        <span className='lines'></span>
                    </a>
                    </div>
                    <div className='navbar-item'>
                    <a href="/">
                        Contract
                        <span className='lines'></span>
                    </a>
                    </div>
                    <div className='navbar-item'>
                    <a href="https://docs.google.com/document/d/1F7sYi49ajXfzlTbGj46Q7s2F0hkVBUKgdQWCfL6fkdU/edit?usp=sharing" target="_blank" rel="noreferrer">
                        Docs
                        <span className='lines'></span>
                    </a>
                    </div>
                </div>
                </Breakpoint>
            </BreakpointProvider>
            <div className='mainside d-flex align-items-center'>
                <span className="btn-main">Connect Wallet</span>
            </div>
            </div>
            <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
                <div className="menu-line white"></div>
                <div className="menu-line1 white"></div>
                <div className="menu-line2 white"></div>
            </button>
      </header>
    )
}