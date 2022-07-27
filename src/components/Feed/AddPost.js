import Card from '../UI/Card';

import { ReactComponent as AskIcon } from '../../assets/feed/ask.svg';
import { ReactComponent as AnswerIcon } from '../../assets/feed/answer.svg';
import { ReactComponent as PostIcon } from '../../assets/feed/post.svg';
import styles from './AddPost.module.css';

const AddPost = () => {
  return (
    <section className={styles.section}>
      <Card className={styles.card}>
        <div className={styles.integratedBtn}>
          <h1 className={styles.heading}>
            <button className={styles['ask-share-btn']}>What do you want to ask or share?</button>
          </h1>
          <img src='https://qph.cf2.quoracdn.net/main-thumb-1619119033-50-vkgbjgcbnzfnlkggkwoltihgvxxjzvhv.jpeg' alt='User Profile Image' className={styles.userProfile} />
        </div>
        <div className={styles.threeBtns}>
          <button type='button' className={styles.uploadBtn}>
            <AskIcon className={styles.icon}/>
            Ask
          </button>
          <span className={styles['answer-container']}>
            <a href='#' target='_blank' rel="noreferrer noopener" className={styles.answer}>
              <AnswerIcon className={styles.icon} />
              Answer
            </a>
          </span>
          <button type='button' className={styles.uploadBtn}>
            <PostIcon className={styles.icon} />
            Post
          </button>
        </div>
      </Card>
    </section>
  )
};

export default AddPost;