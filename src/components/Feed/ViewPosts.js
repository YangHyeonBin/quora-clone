import Post from './Post';

import styles from './ViewPosts.module.css';

const ViewPosts = () => {
  return (
    <section className={styles['post-container']}>
        <h1 className={styles['sr-only']}>Your timeline</h1>
        <ol>
          <li><Post /></li>
          <li><Post /></li>
        </ol>
    </section>
  )
};

export default ViewPosts;