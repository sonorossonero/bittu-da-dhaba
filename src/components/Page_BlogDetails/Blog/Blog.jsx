import React, { useContext } from 'react';
import { Sidebar } from '../../Page_Blog/Main/Main';
import { ReactComponent as Play } from '../../../images/video/Play.svg';
import { ReactComponent as Comment } from '../../../images/Blog_Details/icon1.svg';
import { ReactComponent as Like } from '../../../images/Blog_Details/icon2.svg';
import styles from './Blog.module.scss';
import { bittuContext } from './../../Context';

export default function Blog () {
  const { openBlogDetail } = useContext(bittuContext);
  return (
    <section className={styles.blog}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.bgIcon}></div>
          <div className="imageTitle">
            <div className={styles.publication}>
              <p className={styles.data}>{openBlogDetail?.data}</p>
              <p className={styles.author}>{openBlogDetail?.author}</p>
            </div>
            <div className={styles.title}>
              {/* <h4>{openBlogDetail?.title}</h4> */}
              <h4>Crispy भटूरे & Spicy छोले recipe</h4>
            </div>
          </div>
          <div className={styles.blogSidebar}>
            <div className={styles.content}>
              <div className={styles.contentText}>
                <div className={styles.text1}>
                  <p>Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a deep-fried bread made from maida. Chole bhature is often eaten as a breakfast dish, sometimes accompanied with lassi. It can also be street food or a complete meal and may be accompanied with onions, pickled carrots, green chutney or achaar.</p>
                </div>
                <div className={styles.prepare}>
                  <div className={styles.prepareTitle}>
                    <h5>How to make Chole</h5>
                  </div>
                  <div className={styles.prepareText}>
                    <p>Chole is prepared by cooking chickpeas and adding spices such as cumin, coriander seeds, turmeric powder, and chili powder. Onion, garlic, and ginger are also added for additional flavor. Bhature is prepared by combining flour, salt, and oil, and kneading the dough. The dough is rolled out into circles and deep-fried until the bhature puff up.</p>
                  </div>
                  <ul className={styles.prepareList}>
                    <li className={styles.prepareItem}>White gram (kabuli chana) – 250 grams (1 1/4 cup)</li>
                    <li className={styles.prepareItem}>Baking soda – half teaspoon</li>
                    <li className={styles.prepareItem}>Tea bag - 2 tea bags then use 1 1/2 teaspoon tea tied in a white and clean cloth.</li>
                    <li className={styles.prepareItem}>Tomato - 4 - 5 medium size</li>
                    <li className={styles.prepareItem}>Green chili - 2</li>
                    <li className={styles.prepareItem}>Ginger - 1 inch long piece or 1 tsp ginger paste</li>
                    <li className={styles.prepareItem}>Refined oil – 2 tbsp</li>
                    <li className={styles.prepareItem}>Cumin - half teaspoon</li>
                    <li className={styles.prepareItem}>Asafoetida – 1-2 pinch</li>
                    <li className={styles.prepareItem}>Pomegranate seeds powder – a little more than 1 teaspoon</li>
                    <li className={styles.prepareItem}>Coriander powder - 1/2 tsp</li>
                    <li className={styles.prepareItem}>Red chilli powder – 1/4th teaspoon</li>
                    <li className={styles.prepareItem}>Garam masala - 1/4 tsp</li>
                    <li className={styles.prepareItem}>Salt - as per taste</li>
                    <li className={styles.prepareItem}>Green Coriander – Half a small bowl (finely chopped)</li>
                  </ul>
                </div>
                <div className={styles.video}>
                  <div className={styles.play}>
                    <Play />
                  </div>
                </div>
                <div className={styles.text2}>
                  <p>Keep the chickpeas soaked in water overnight. Wash the chickpeas after taking them out of the water, put them in the cooker, add a small glass of water, salt and baking soda, and also put the tea bag. Close the cooker and put it on the gas to boil. After the cooker whistles, slow down the gas, and let it cook for 2-3 minutes, turn off the gas and let the chickpeas cook in the cooker till the pressure is over. Till then we prepare the masala.</p>
                </div>
                <div className={styles.quote}>
                  <p> Chole Bhature is an emotion </p>
                </div>
                <div className={styles.textImageWrapper}>
                  <div className={styles.imageContent}>
                    <div className={styles.ICTitle}>
                      <h5>How to make Bhature</h5>
                    </div>
                    <div className={styles.ICText}>
                      <p>Sieve the flour and semolina in a vessel, make a space in the middle of the flour, add 2 tablespoons of oil, salt, baking soda, curd and sugar and mix all these things well. Knead a soft dough with the help of lukewarm water.
                          Keep the kneaded dough covered in a closed cupboard or some warm place for 2 hours.
                          Heat oil in a pan.</p>
                    </div>
                    <ul className={styles.ICList}>
                      <li className={styles.ICItem}>Flour – 400 grams (4 cups)</li>
                      <li className={styles.ICItem}>Semolina (Rava) - 50 - 60 grams (half cup)</li>
                      <li className={styles.ICItem}>Curd - 100 grams (half cup)</li>
                      <li className={styles.ICItem}>Salt - 3/4 tsp</li>
                      <li className={styles.ICItem}>Sugar - 1 tsp</li>
                      <li className={styles.ICItem}>Baking Soda – 3/4 tsp</li>
                      <li className={styles.ICItem}>oil - for frying</li>
                    </ul>
                  </div>
                  <div className={styles.imageImg}>
                  </div>
                </div>
                <div className={styles.text3}>
                  <p>Take out a little dough equal to a lemon from the kneaded dough. Make dough and roll it like poori, but it is slightly thicker than poori. (If you can roll it by patting it with hand, then make it by patting it with hand). Put the poori in hot oil, press it with a ladle to make it puffy, turn it on both sides and fry till it turns light brown.</p>
                </div>
              </div>
              <div className={styles.contentActions}>
                <div className={styles.tags}>
                  <p className={styles.tag}>#Grilling</p>
                  <p className={styles.tag}>#Outdoors</p>
                  <p className={styles.tag}>#Cooking</p>
                </div>
                <div className={styles.actions}>
                  <div className={styles.action}>
                    <div className={styles.actionIcon}>
                      <Comment />
                    </div>
                    <div className={styles.actionText}>Comment</div>
                  </div>
                  <div className={styles.action}>
                    <div className={styles.actionIcon}>
                      <Like />
                    </div>
                    <div className={styles.actionText}>Like</div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
