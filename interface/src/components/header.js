import { useEffect, useState } from "react";
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
                <div className='navbar-title navbar-item'>
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
                        <Link to="/">
                        Audit
                        <span className='lines'></span>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to="/explore">
                        Telegram
                        <span className='lines'></span>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to="/activity">
                        Discord
                        <span className='lines'></span>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to="/users">
                        Twitter
                        <span className='lines'></span>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to="/users">
                        Contract
                        <span className='lines'></span>
                        </Link>
                    </div>
                    <div className='navbar-item'>
                        <Link to="/users">
                        Docs
                        <span className='lines'></span>
                        </Link>
                    </div>
                    </div>
                }
                </Breakpoint>

                <Breakpoint xl>
                <div className='menu'>
                    <div className='navbar-item'>
                    <Link to="/">
                        Audit
                        <span className='lines'></span>
                    </Link>
                    </div>
                    <div className='navbar-item'>
                    <Link to="/explore">
                        Telegram
                        <span className='lines'></span>
                    </Link>
                    </div>
                    <div className='navbar-item'>
                    <Link to="/activity">
                        Discord
                        <span className='lines'></span>
                    </Link>
                    </div>
                    <div className='navbar-item'>
                    <Link to="/users">
                        Twitter
                        <span className='lines'></span>
                    </Link>
                    </div>
                    <div className='navbar-item'>
                    <Link to="/users">
                        Contract
                        <span className='lines'></span>
                    </Link>
                    </div>
                    <div className='navbar-item'>
                    <Link to="/users">
                        Docs
                        <span className='lines'></span>
                    </Link>
                    </div>
                </div>
                </Breakpoint>
            </BreakpointProvider>
            <div className='mainside d-flex align-items-center'>
                <span className="btn-main">Connect Wallet</span>
            </div>
            </div>
      </header>
    )
}