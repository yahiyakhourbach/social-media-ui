import { MoreVert } from '@material-ui/icons';
import './Post.css';
import { users } from '../../DummyData';
const Post = ({ post }) => {
  const img = users.filter((user) => {
    if (user.id === post.userid) {
      return user.img;
    } else {
      return '';
    }
  });
  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="post-top-left">
            <img src={img[0].img} alt="" className="imgpost" />
            <span className="username-post">{img[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="postText">{post?.title}</span>
          <img src={post.img} alt="" className="postIMg" />
        </div>
        <div className="postbottom">
          <div className="postleftbottom">
            <img src="/assests/heart.png" alt="" className="emojiPost" />
            <img src="/assests/like.png" alt="" className="emojiPost" />
            <span className="postlikecounter">{post.like} likes</span>
          </div>
          <div className="postrightbottom">
            <span className="postcommenttext">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
