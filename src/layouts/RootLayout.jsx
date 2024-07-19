import { Outlet } from 'react-router-dom';

import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import Banner from '@/components/layouts/Banner';

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <main className='site-content'>
            <Banner/>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default RootLayout;