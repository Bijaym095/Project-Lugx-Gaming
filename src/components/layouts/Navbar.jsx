import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SiteLogo from "@/assets/images/lugx-logo.png";
import { buttonVariants } from "@/components/common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef();  

  const navLinks = [
    { name: "Home", href: "/", },
    { name: "Components", href: "/components", } ,
    { name: "Our Shop", href: "/", },
    { name: "Product Details", href: "/", },
    { name: "Contact Us", href: "/", },
  ];

  const toggleMenu = () => setIsMenuOpen((value)=> !value);

  useEffect(()=> {
    const handleSticky = () => {
      if(navRef.current){
        const navHeight = navRef.current.clientHeight;
        window.scrollY > navHeight ? setIsSticky(true): setIsSticky(false)
      }
    }
    window.addEventListener("scroll", handleSticky);

    return () => window.removeEventListener("scroll", handleSticky);
  }, [])

  return (
    <nav ref={navRef} className={`site-header fixed top-0 left-0 right-0 z-[9999] py-4 bg-secondary ${isSticky ? "shadow-[0_14px_40px_rgba(0,0,0,.15)]" : ""} transition-all duration-300 ease-in-out`}>
      <div className="container">
        <div className="flex justify-between items-center gap-4">
          {/* Start Site Logo */}
          <NavLink to="/" className="navbar-brand">
            <picture className="max-w-[110px] [&_img]:w-full">
              <source srcSet={SiteLogo} type="image/png" />
              <img src={SiteLogo} width={110} height={40} alt="Lugx Logo" loading="lazy" />
            </picture>
          </NavLink>
          {/* End Site Logo */}

          <div>
            <div className={`navbar-collapse max-xl:fixed top-0 left-0 bottom-0 flex max-xl:flex-col xl:items-center gap-4 max-xl:w-[280px] max-xl:py-10 ${isMenuOpen ? "max-xl:translate-x-0" : "max-xl:-translate-x-full"} text-white max-xl:bg-black/80 max-xl:backdrop-blur-lg transition-all duration-300 ease-in-out`}>
              <ul className="navbar-nav flex max-xl:flex-col xl:gap-2 max-xl:[&_li]:p-4 max-xl:[&_li]:border-b max-xl:[&_li]:border-white">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.href} className="!text-inherit">{link.name}</NavLink>
                  </li>
                ))}
              </ul>

              <div className="navbar-cta max-xl:p-4">
                <a href="/" role="button" type="button" className={buttonVariants({variant: "primary", className: "[&:not(:hover)]:text-white",})}>
                  SIGN IN
                </a>
              </div>
            </div>

            <button className={`menu-toggler ${isMenuOpen ? "collapsed" : ""} flex  xl:hidden flex-col gap-1.5 w-8 p-1 border border-white rounded [&_span]:block [&_span]:w-full [&_span]:h-0.5 [&_span]:bg-white [&_span]:rounded [&_span]:transition-all first:[&.collapsed_span]:rotate-45 first:[&.collapsed_span]:translate-y-2 [&.collapsed_span:nth-child(2)]:opacity-0 last:[&.collapsed_span]:-rotate-45 last:[&.collapsed_span]:-translate-y-2`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
