import './OnlineFriends.css';

const OnlineFriends = ({ user }) => {
  return (
    <li className="rightbarFriends">
      <div className="friendprofilecontainer">
        <img src={user.img} alt="" className="friendprofileImg" />
        <div className="onlinecircle"></div>
      </div>
      <span className="friendprofileText">{user.username}</span>
    </li>
  );
};

export default OnlineFriends;
