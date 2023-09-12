import { motion } from 'framer-motion';
import React, { forwardRef, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { bittuContext } from './../Context';

const animation = {
  hidden: {
    x: '100%',
    scale: 0.3
  },
  visible: {
    x: 0,
    scale: 1,
    transition: { duration: 0.4 }
  },
  exit: {
    x: '100%'
  }
};

const setActive = ({ isActive }) => isActive ? 'active-header' : '';

export default function Header () {
  const { reservationRef, setOpenMenu, openMenu } = useContext(bittuContext);
  const handleClick = () => {
    setTimeout(() => {
      reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };
  return (
    <header id="header" className={styles.header}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">ｂι𝕋ŤỮ ժ𝔞 𝖉𝖍𝖆𝖇𝖆</Link>
          </div>
          {
            !openMenu
              ? <Menu active={false} setOpenMenu={setOpenMenu} handleClick={handleClick} />
              : <MMenu active={true} variants={animation} setOpenMenu={setOpenMenu} handleClick={handleClick} />
          }
          <div className={styles.burgerMenu} onClick={() => setOpenMenu(!openMenu)}>
            <span className={!openMenu ? `${styles.menuTablet}` : `${styles.menuTablet} ${styles.active}`}></span>
          </div>
        </motion.div>
      </div>
    </header >
  );
}

const Menu = forwardRef(({ active, setOpenMenu, handleClick }, ref) => (
  <div className={!active ? `${styles.navWrapper}` : `${styles.navWrapper} ${styles.active}`} ref={ref}>
    <nav className={!active ? `${styles.nav}` : `${styles.active} ${styles.nav}`}>
      <ul className={styles.navList} onClick={() => setOpenMenu(false)}>
        <li className={styles.navItem}>
          <NavLink to="/" className={setActive}>Home</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="contacts" className={setActive}>Contact Us</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="blog" className={setActive}>Blog</NavLink>
        </li>
      </ul>
    </nav>
    <div onClick={() => setOpenMenu(false)} className={!active ? `${styles.registration}` : `${styles.active} ${styles.registration}`}>
      <div className={styles.table}>
        <Link to="/" onClick={handleClick}>Reserve Table</Link>
      </div>
    </div>
  </div>
));

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

Menu.displayName = 'Menu';

const MMenu = motion(Menu);
