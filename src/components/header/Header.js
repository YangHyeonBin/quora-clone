import React, { useState } from 'react';

import { ReactComponent as HomeIcon} from '../../assets/header/home.svg';
import { ReactComponent as FollowingIcon} from '../../assets/header/following.svg';
import { ReactComponent as AnswerIcon} from '../../assets/header/answer.svg';
import { ReactComponent as SpacesIcon} from '../../assets/header/spaces.svg';
import { ReactComponent as NotificationsIcon} from '../../assets/header/notifications.svg';
import { ReactComponent as SearchIcon } from '../../assets/header/search.svg';
import { ReactComponent as LangIcon } from '../../assets/header/language.svg';
import { ReactComponent as DownArrow } from '../../assets/header/down-arrow.svg';

import styles from './Header.module.css';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const iconColorHandler = () => {
    setIsClicked(true);
    console.log('clicked', IconClasses);
  }

  const IconClasses = `${styles.icons} ${isClicked ? styles.clicked : ''}` // 아이콘별로 따로 해야 해..?

  return (
    <div className={styles.header}>
      <h1>
        <a href='#' className={styles.logo}>Quora</a>
      </h1>
      <div className={styles.iconContainer}>
        <a href='#'>
          <HomeIcon className={IconClasses} onClick={iconColorHandler} />
        </a>
        <a href='#'>
          <FollowingIcon className={IconClasses} />
        </a>
        <a href='#'>
          <AnswerIcon className={IconClasses} />
        </a>
        <a href='#'>
          <SpacesIcon className={IconClasses} />
        </a>
        <a href='#'>
          <NotificationsIcon className={IconClasses} />
        </a>
      </div>
      <form className={styles.search}>
        <SearchIcon className={styles.searchIcon} />
        <input type='search' placeholder='Search Quora' className={styles.searchBar} />
      </form>
      <button className={styles.quoraPlusBtn}>Try Quora+</button>
      <button className={styles.userProfile}>
        <img src='https://qph.cf2.quoracdn.net/main-thumb-1619119033-50-vkgbjgcbnzfnlkggkwoltihgvxxjzvhv.jpeg' alt='User Profile Image' />
      </button>
      <button className={styles.langBtn}>
        <LangIcon className={styles.langIcon} />
      </button>
      <div className={styles.btnContainer}>
        <button className={styles.addQBtn}>
          Add question
        </button>
        <button className={styles.arrowBtn}>
          <DownArrow className={styles.arrowIcon}/>
        </button>
      </div>
    </div>
  )
};

export default Header;