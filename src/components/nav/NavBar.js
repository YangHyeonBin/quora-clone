import ListItem from './ListItem';

import { ReactComponent as PlusIcon } from '../../assets/nav/plus.svg';
import { ReactComponent as DiscoverIcon } from '../../assets/nav/discover.svg';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles['sr-only']}>Side navigation bar</h1>
      {/* <div className={styles['nav-container']}> */}
        <div>
          <button type='button' className={`${styles.spaceBtn} ${styles.gray}`}>
            <PlusIcon className={styles.spaceIcon} />
            Create Space
          </button>
          <ul
            className={styles.container}
            aria-label="Choose the topic you want to see."
          >
            <ListItem href="#" className={styles.topic}>
              Business
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Cooking
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Music
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Food
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Economics
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Writing
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Design
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Fashion and Style
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Health
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Visiting and Travel
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Technology
            </ListItem>
            <ListItem href="#" className={styles.topic}>
              Books
            </ListItem>
          </ul>
          <button type='button' className={styles.spaceBtn}>
            <DiscoverIcon className={styles.spaceIcon} />
            Discover Spaces
          </button>
        </div>
        <hr />
        <footer>
          <ul
            aria-label="Found more about Quora"
            className={`${styles.container} ${styles.infos}`}
          >
            <ListItem href='#' className={styles.info}>
              About
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Careers
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Terms
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Privacy
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Acceptable
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Use
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Businesses
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Press
            </ListItem>
            <ListItem href='#' className={styles.info}>
              Your Ad Choices
            </ListItem>
          </ul>
        </footer>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
