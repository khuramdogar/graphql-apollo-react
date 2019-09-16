import React from 'react';
import Logo from '../static/image/Logo.svg';
const Navbar = () => (
  <header className="header-nav-container">
   <nav class="customize-nav-bar ">
        <div class="navbar-brand nav-brand-customize" >
            <Logo  class='logo'/>
        </div>
                        
        <div class="nav-right-main" >
            <div className="nav-left">
                    <div className="nav-item-customize nav-item-customize-1">Pricing</div>
                    <div className="nav-item-customize nav-item-customize-2">Feature</div>
                    <div className="nav-item-customize nav-item-customize-3">Product</div>
            </div>
            <div className="nav-right">
                    <div className="nav-item-customize nav-item-customize-4">Sign in</div>
                    <div className="nav-item-customize nav-item-customize-5 nav-item-button">Get Started</div>
            </div>
        </div>
    </nav>
  </header>
);

export default Navbar;
