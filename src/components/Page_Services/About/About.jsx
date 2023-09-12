import React from 'react';
import styles from './About.module.scss';
import Title from './../../Title/Title';
import Button from './../../Button/Button';

export default function About () {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <Title text="Serving Quality" title="We at Bittu da Dhaba are serving our customers for over a decade." />
          </div>
          <div className={styles.text}>
            <p>Today, Bittu da Dhaba is a major landmark on the GT Road, known far and wide for its matchless recipes, faultless service, and an ambiance to relax and rejuvenate. Located conveniently on NH-1, Bittu da Dhaba is just the kind of place to catch up with your family and friends for an exciting food excursion.</p>
          </div>
          <div className={styles.buttons}>
            <Button text="Read More" />
            <Button text="Contact Us" link="/contacts" className={ styles.aboutBtn} />
          </div>
        </div>
      </div>
    </section>
  );
}
