import React from 'react';
import Image from 'react-image-webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper';
import quotes from '../../../images/Chefs/“.png';
// import signature from '../../../images/Chefs/Kevin Luo.svg';
import './ChefsSlider.scss';
import Title from '../../Title/Title';
import styles from './Chefs.module.scss';

export default function Chefs () {
  return (
    <section className={styles.chefs}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.image}>
            <Swiper
              direction={'vertical'}
              modules={[EffectCreative, Autoplay]}
              effect={'creative'}
              creativeEffect={{ prev: { shadow: false, translate: [0, 0, 0] }, next: { translate: [0, '-100%', 0] } }}
              slidesPerView={1}
              loop={true}
              allowTouchMove={false} // No finger swipe
              autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
              speed={1500}
              className={styles.chefsSlider}>
              <SwiperSlide>
                <Image src={require('../../../images/Chefs/01.jpg')} webp={require('../../../images/Chefs/01.webp')} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={require('../../../images/Chefs/02.jpg')} webp={require('../../../images/Chefs/02.webp')} alt="slide2" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.contant}>
            <Title className={styles.chefsTitle} text="Chef’s Word" title="हम खाना नहीं, एहसास बनते हैं" />
            <div className={styles.contantText}>
              <div className={styles.textTitle}>
                <img src={quotes} alt="quotes" />
              </div>
              <p className={styles.text}>When I push open the kitchen doors, I want to see a dining room full of diners, but especially families, who, looking at their plates, feel seen, celebrated, and recognized. And when I look in the mirror, I want to see a young chef who made that world a reality.” </p>
            </div>
            <div className={styles.contantName}>
              <h6 className={styles.name}>Banti Halwai</h6>
              <p className={styles.position}>Head Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
