import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../Button/Button';
import logo from '../../../images/Hero/iconLogo.svg';
import styles from './About.module.scss';

export default function About () {
  const animatedLeft = {
    hidden: {
      x: '-100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const animatedRight = {
    hidden: {
      x: '100%',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };
  return (
    <section className={styles.about}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className={styles.container}>
          <motion.div
            variants={animatedLeft}
            className={styles.aboutUs}>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p>Today, Bittu da Dhaba is a major landmark on the GT Road, known far and wide for its matchless recipes, faultless service, and an ambiance to relax and rejuvenate.</p>
            </div>
            <Button text="Know More" link="about" />
          </motion.div>
          <motion.div
            variants={animatedRight}
            className={styles.history}>
            <h2 className={styles.title}>Our History</h2>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.text}>
              <p> Founded by Bittu Prakash Singh in 2002 mainly to cater to the needs of truck drivers. Now it is being looked after by his sons Chintu Singh and Honey Singh. </p>
            </div>
            <Button text="Know More" link="history" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
