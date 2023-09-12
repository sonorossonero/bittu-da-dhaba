import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './../components/Page_Contacts/Hero/Hero';
import Main from './../components/Page_Blog/Main/Main';
import { bittuContext } from './../components/Context';

export default function Blog () {
  const { location } = useContext(bittuContext);
  return (
    <>
      {
        location.pathname === '/blog'
          ? <article>
            <Hero title="Our Blogs" page="Our Blogs" />
            <Main />
          </article>
          : <Outlet />
      }
    </>
  );
};
