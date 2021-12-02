import './Friends.css';

const Friends = ({ user }) => {
  return (
    <li className="friendlistItem">
      <img src={user.img} alt="" className="imgFriendSidebar" />
      <span className="friendName">{user.username}</span>
    </li>
  );
};

export default Friends;
