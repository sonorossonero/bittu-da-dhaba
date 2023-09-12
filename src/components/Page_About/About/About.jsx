import React from 'react';
import { ReactComponent as Play } from '../../../images/video/Play.svg';
import styles from './About.module.scss';
import Title from './../../Title/Title';

export default function About () {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className={styles.title}>
            <Title text="About Us" title="Happy Hours with Us" />
          </div>
          <div className={styles.text}>
            <p>The famed eatery was founded by Bittu Prakash Singh in 2002 mainly to cater to the needs of truck drivers. Now it is being looked after by his sons Chintu Singh and Honey Singh. The delicious meal of dal roti, sabzi and rice were served on charpais initially. Carrying on the legacy of our olden days, we bring back to you the richness of our food culture with heart-warming hospitality and classic decor. With our love for authentic Indian cuisine, over the years we have expanded our menu to include many lip-smacking north Indian and south Indian delicacies.</p>
          </div>
          <div className={styles.video}>
            <div className={styles.play}>
              <Play />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
