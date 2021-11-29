import { MoreVert } from '@material-ui/icons';
import './Post.css';

const Post = () => {
  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="posttop">
          <div className="post-top-left">
            <img
              src="https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="imgpost"
            />
            <span className="username-post">done spastian</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="postText">hey it's my post</span>
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80"
            alt=""
            className="postIMg"
          />
        </div>
        <div className="postbottom">
          <div className="postleftbottom">
            <img src="/assests/heart.png" alt="" className="emojiPost" />
            <img src="/assests/like.png" alt="" className="emojiPost" />
            <span className="postlikecounter">32 likes</span>
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
