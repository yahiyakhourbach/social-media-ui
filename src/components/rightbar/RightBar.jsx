import './RightBar.css';
import { users } from '../../DummyData';
import OnlineFriends from '../onlineFriends/OnlineFriends';
const RightBar = () => {
  return (
    <div className="RightBar">
      <div className="RightBarWrapper">
        <div className="birthdaycontianer">
          <img src="/assests/gift.png" alt="" className="bitrthdayImg" />
          <span className="giftText">
            <b>jeo</b> and <b>6 other friends</b> are having birthday
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1567972787521-761ca528e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
          className="addImg"
        />
        <h4 className="onlinefriends">online Friends</h4>
        <ul className="rightBarFriendList">
          {users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightBar;
