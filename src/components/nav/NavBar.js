import { ReactComponent as PlusIcon } from '../../assets/nav/plus.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/nav/discover.svg';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles['sr-only']}>Side navigation bar</h1>
      <div>
        <button className={`${styles.spaceBtn} ${styles.gray}`}>
          <PlusIcon className={styles.spaceIcon} />
          Create Space
        </button>
        <ul
          className={styles.container}
          aria-label="Choose the topic you want to see."
        >
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Business
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Cooking
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Music
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Food
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Economics
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Writing
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Design
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Fashion and Style
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Health
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Visiting and Travel
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Technology
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noreferrer noopener"
              className={styles.topic}
            >
              Books
            </a>
          </li>
        </ul>
        <button className={styles.spaceBtn}>
          <DiscoverIcon className={styles.spaceIcon} />
          Discover Spaces
        </button>
      </div>
      <hr />
      <ul
        aria-label="Found more about Quora"
        className={`${styles.container} ${styles.infos}`}
      >
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Terms
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Privacy
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Acceptable
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Use
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Businesses
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Press
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.info}
          >
            Your Ad Choices
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
