import { NavLink } from "react-router-dom";

import SiteLogo from "@/assets/images/lugx-logo.png"; 

const Navbar = () => {

    const navLinks = [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Components",
        href: "/components",
      },
      {
        name: "Our Shop",
        href: "/",
      },
      {
        name: "Product Details",
        href: "/",
      },
      {
        name: "Contact Us",
        href: "/",
      },
    ];

  return (
    <nav className="site-header py-4 bg-secondary">
      <div className="container">
          <div className="flex justify-between items-center gap-4">
            <NavLink to="/" className="navbar-brand">
              <picture className="max-w-[110px] [&_img]:w-full">
                <source srcSet={SiteLogo} type="image/png" />
                <img src={SiteLogo} width={110} height={40} alt="Lugx Logo" loading="lazy" />
              </picture>
            </NavLink>
            
            <div className="xl:flex xl:gap-4">
              <div className="navbar-collapse">
                <ul className="navbar-nav">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.href}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a href="/" className="btn btn-primary">SIGN IN</a>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;