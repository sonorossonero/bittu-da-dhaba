import React, { useContext } from 'react';
import Title from '../Title/Title';
import logo from '../../images/Hero/iconLogo.svg';
import { ReactComponent as Icon1 } from '../../images/Footer/icon01.svg';
import { ReactComponent as Icon2 } from '../../images/Footer/icon02.svg';
import { ReactComponent as Icon3 } from '../../images/Footer/icon03.svg';
import styles from './Footer.module.scss';
import { bittuContext } from './../Context';

export default function Footer () {
  const { ref, setOpenMenu } = useContext(bittuContext);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className={styles.footer} onClick={() => setOpenMenu(false)}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <a className={styles.toTop} onClick={handleClick}>Top</a>
          <div className={styles.newsletter}>
            <Title className={styles.footerTitle} text="Special Bookings for :-" title="Wedding & Parties" />
            <div className={styles.newsletterText}>
              <p>Of your choice, with our taste, at best rates !</p>
            </div>
            <form className={styles.subscribe} name="subscribe" data-netlify="true" method="POST">
              <input type="hidden" name="form-name" value="subscribe" />
              <input type="text" name="email" placeholder="Email Address / Mobile No." className={styles.subscribeInput} required />
              <button type="submit" className="btn__submit">Get Quotation</button>
            </form>
          </div>
          <div className={styles.content}>
            <div className={styles.contacts}>
              <h4 className={styles.contactsTitle}>Visit us</h4>
              <p className={styles.contactsText}>Near Jaat Dharamshala, NH 1, Sonipat, Hr 86</p>
              <a className={styles.contactsPhone} href="tel:+12123441230">+91 9876543210</a>
              <a className={styles.contactsPhone} href="tel:+12125551230">bittudadhaba@gmail.com</a>
            </div>
            <div className={styles.contentLogo}>
              <h2 className={styles.logoTitle}>ｂι𝕋ŤỮ ժ𝔞 𝖉𝖍𝖆𝖇𝖆</h2>
              {/* <p className={styles.logoText}><q> माना पैसों से हम खुशियां नहीं खरीद सकते, पर इससे टेस्टी खाना तो खरीदा जा सकता है </q></p> */}
              <p className={styles.logoText}><q> jab tak rahega samose mein aaloo tab tak hamara dhaba h chalu </q></p>
              <div className={styles.logoImg}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.logoIcons}>
                <Icon1 />
                <Icon2 />
                <Icon3 />
              </div>
            </div>
            <div className={styles.schedule}>
              <h4 className={styles.scheduleTitle}>Opening Hours</h4>
              <p className={styles.weekdays}>Monday - Friday:</p>
              <p className={styles.businessHours}>08:00 am - 11:00 pm</p>
              <p className={styles.weekdays}>Saturday - Sunday:</p>
              <p className={styles.businessHours}>07:00am - 01:00 am</p>
            </div>
          </div>
          <div className={styles.footerText}>
            <p>2023 ｂι𝕋ŤỮ ժ𝔞 𝖉𝖍𝖆𝖇𝖆. All Rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
