import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer';
import { bittuContext } from './Context';

export default function Layout () {
  const { openMenu, setOpenMenu } = useContext(bittuContext);
  return (
    <>
      <Header />
      <main className={openMenu ? 'hidden' : 'main'} onClick={() => setOpenMenu(false)}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
