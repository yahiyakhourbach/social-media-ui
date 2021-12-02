import { posts } from '../../DummyData';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './feed.css';

const Feed = () => {
  return (
    <div className="Feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
