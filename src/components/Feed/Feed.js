import AddPost from './AddPost';
import ViewPosts from './ViewPosts';

import styles from './Feed.module.css';

const Feed = () => {
  return (
    <main className={styles['posts-container']}>
      <AddPost />
      <ViewPosts />
    </main>
  )
};

export default Feed;