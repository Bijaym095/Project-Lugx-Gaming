import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import Banner from '@/components/layouts/Banner';

const RootLayout = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const siteHeaderHeight = document.querySelector(".site-header").getBoundingClientRect().height;

    const setMarginTop = () => {
      if(mainRef.current){
        mainRef.current.style.marginTop = `${siteHeaderHeight}px`;
      }
    }
    setMarginTop();
    window.addEventListener("resize", setMarginTop);

    () => window.removeEventListener("resize", setMarginTop);
  }, []);

  return (
    <>
      <Navbar/>
      <main ref={mainRef} className="site-content">
        <Banner/>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout;