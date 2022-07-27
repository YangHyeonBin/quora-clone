import Card from '../UI/Card';

import styles from './Ad.module.css';

const Ad = () => {
  return (
    <Card className={styles.card}>
      <section className={styles['ad-container']}>
        <h1 className={styles['sr-only']}>Advertisements</h1>
        <a href='#' traget='_blank' rel='noreferrer noopener' className={styles['ad-link']}>
          <figure className={styles.ad}>
            <img src='https://cdn.mhnse.com/news/photo/202204/100477_83407_3328.jpg' alt='Ad of musical "Mata Hari"' className={styles['ad-image']} />
            <figcaption className={styles.caption}>뮤지컬 마타하리</figcaption>
          </figure>
        </a>
        <a href='#' traget='_blank' rel='noreferrer noopener' className={styles['ad-link']}>
          <figure className={styles.ad}>
            <img src='https://cdn.mhnse.com/news/photo/202204/100477_83407_3328.jpg' alt='Ad of musical "Mata Hari"' className={styles['ad-image']} />
            <figcaption className={styles.caption}>뮤지컬 마타하리</figcaption>
          </figure>
        </a>
        <a href='#' traget='_blank' rel='noreferrer noopener' className={styles['ad-link']}>
          <figure className={styles.ad}>
            <img src='https://cdn.mhnse.com/news/photo/202204/100477_83407_3328.jpg' alt='Ad of musical "Mata Hari"' className={styles['ad-image']} />
            <figcaption className={styles.caption}>뮤지컬 마타하리</figcaption>
          </figure>
        </a>
        <a href='#' traget='_blank' rel='noreferrer noopener' className={styles['ad-link']}>
          <figure className={styles.ad}>
            <img src='https://cdn.mhnse.com/news/photo/202204/100477_83407_3328.jpg' alt='Ad of musical "Mata Hari"' className={styles['ad-image']} />
            <figcaption className={styles.caption}>뮤지컬 마타하리</figcaption>
          </figure>
        </a>
        <a href='#' traget='_blank' rel='noreferrer noopener' className={styles['ad-link']}>
          <figure className={styles.ad}>
            <img src='https://cdn.mhnse.com/news/photo/202204/100477_83407_3328.jpg' alt='Ad of musical "Mata Hari"' className={styles['ad-image']} />
            <figcaption className={styles.caption}>뮤지컬 마타하리</figcaption>
          </figure>
        </a>
      </section>
    </Card>
  )
};

export default Ad;