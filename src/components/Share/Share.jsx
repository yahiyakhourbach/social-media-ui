import { PermMedia, Room, Label, EmojiEmotions } from '@material-ui/icons';
import './Share.css';

const Share = () => {
  return (
    <div className="Share">
      <div className="share-wrapper">
        <div className="shartop">
          <img
            src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="shareImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="share your story"
          />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="share-options">
            <div className="share-option">
              <PermMedia htmlColor="tomato" />
              <span className="share-options-text">photo/video</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" />
              <span className="share-options-text">Location</span>
            </div>
            <div className="share-option">
              <Label htmlColor="blue" />
              <span className="share-options-text">Tag</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" />
              <span className="share-options-text">Feelings</span>
            </div>
          </div>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
