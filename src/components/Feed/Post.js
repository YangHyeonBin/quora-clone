import { ReactComponent as UpIcon } from '../../assets/feed/up.svg';
import { ReactComponent as DownIcon } from '../../assets/feed/down.svg';
import { ReactComponent as ShareIcon } from '../../assets/feed/share.svg';
import { ReactComponent as CommentIcon } from '../../assets/feed/comment.svg';
import { ReactComponent as MoreShareIcon } from '../../assets/feed/moreShare.svg';
import { ReactComponent as MoreIcon } from '../../assets/feed/more.svg';

import styles from './Post.module.css';

const Post = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles['sr-only']}>A post from 작성자명</h1>
      <header className={styles.header}>
        <a href='#' target='_blank' rel="noreferrer noopener">
          <img src='https://qph.cf2.quoracdn.net/main-thumb-1619119033-50-vkgbjgcbnzfnlkggkwoltihgvxxjzvhv.jpeg' alt='User Profile Image' className={styles.userProfile} />
        </a>
        <div className={styles['info-container']}>
          <h2 className={styles.author}>
            <a href='#' target='_blank' rel="noreferrer noopener" className={styles['author-link']}>작성자명</a>
          </h2>
          <p className={styles.date}>2022. 7. 26. 오후 2:20</p>
        </div>
      </header>
      <main className={styles.main}>
        <p>이걸 언제 다 만들 수 있을까요?</p>
        <button type='button'>답변하기</button>
      </main>
      <footer className={styles.footer}>
        <div>
          <button type='button'>
            <UpIcon />
          </button>
          <button type='button'>
            <DownIcon />
          </button>
          <button type='button'>
            <ShareIcon />
          </button>
          <button type='button'>
            <CommentIcon />
          </button>
        </div>
        <div>
          <button type='button'>
            <MoreShareIcon />
          </button>
          <button type='button'>
            <MoreIcon />
          </button>
        </div>
      </footer>
    </article>
  )
};

export default Post;