import Card from '../UI/Card';
import Post from './Post';

import styles from './ViewPosts.module.css';

const ViewPosts = () => {
  return (
    <section className={styles['post-container']}>
      <Card>
        <h1 className={styles['sr-only']}>Your timeline</h1>
        <ol>
          <Post />
        </ol>
      </Card>
    </section>
  )
};

export default ViewPosts;