import { ReactComponent as AnswerIcon } from '../../assets/feed/answer.svg';
import { ReactComponent as UpIcon } from '../../assets/feed/up.svg';
import { ReactComponent as DownIcon } from '../../assets/feed/down.svg';
import { ReactComponent as ShareIcon } from '../../assets/feed/share.svg';
import { ReactComponent as CommentIcon } from '../../assets/feed/comment.svg';
import { ReactComponent as MoreShareIcon } from '../../assets/feed/moreShare.svg';
import { ReactComponent as MoreIcon } from '../../assets/feed/more.svg';
import Card from '../UI/Card';

import styles from './Post.module.css';

const Post = () => {
  return (
    <Card className={styles.card}>
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
          <p className={styles.question}>이걸 언제 다 만들 수 있을까요?</p>
          <button type='button' className={styles.answerBtn}>
            <AnswerIcon />
            <span>답변하기</span>
          </button>
        </main>
        <footer className={styles.footer}>
          <div className={styles.leftBtn}>
            <span className={styles['updown-container']}>
              <button type='button' className={styles.upBtn}>
                <UpIcon />
                <span className={styles.number}>48</span>
              </button>
              <div className={styles.div} aria-label='divider'></div>
              <button type='button' className={styles.downBtn}>
                <DownIcon />
              </button>
            </span>
            <button type='button' className={styles.ordinaryBtn}>
              <ShareIcon />
              <span className={styles.number}>3</span>
            </button>
            <button type='button' className={styles.ordinaryBtn}>
              <CommentIcon />
              <span className={styles.number}>2</span>
            </button>
          </div>
          <div className={styles.rightBtn}>
            <button type='button' className={styles.ordinaryBtn}>
              <MoreShareIcon />
            </button>
            <button type='button' className={styles.ordinaryBtn}>
              <MoreIcon />
            </button>
          </div>
        </footer>
      </article>
    </Card>
  )
};

export default Post;