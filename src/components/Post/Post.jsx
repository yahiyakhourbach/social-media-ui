import { MoreVert } from '@material-ui/icons';
import './Post.css';
import { users } from '../../DummyData';
import { useState } from 'react';
const Post = ({ post }) => {
  const user = users.filter((user) => user.id === post.userid)[0];
  const [like, setLike] = useState(post.like);
  const [isliked, setIsliked] = useState(false);
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
  };
  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="post-top-left">
            <img src={user.img} alt="" className="imgpost" />
            <span className="username-post">{user.username}</span>
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
            <img
              src="/assests/like.png"
              alt=""
              onClick={likeHandler}
              className="emojiPost"
            />
            <img src="/assests/heart.png" alt="" className="emojiPost" />
            <span className="postlikecounter">{like} likes</span>
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
