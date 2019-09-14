import React from 'react';

const Navbar = () => (
  <header className="header-nav-container">
    <nav className="navbar navbar-expand-md ">
      <a className="navbar-brand nav-brand-customize" href="#">Logo Brand</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse nav-right-main" id="navbarNav">
        <div className="nav-left">
          <div className="nav-item-customize">Pricing</div>
          <div className="nav-item-customize">Feature</div>
          <div className="nav-item-customize">Product</div>
        </div>
        <div className="nav-right">
          <div className="nav-item-customize">Sign in</div>
          <div className="nav-item-customize nav-item-button">Get Started</div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
