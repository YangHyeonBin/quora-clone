import AddPost from './AddPost';
import ViewPost from './ViewPost';

import styles from './Feed.module.css';

const Feed = () => {
  return (
    <main>
      <AddPost />
      <ViewPost />
    </main>
  )
};

export default Feed;