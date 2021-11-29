import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="TopBar-container">
      <div className="leftbar">
        <span className="logo">YELL</span>
      </div>
      <div className="centerbar">
        <div className="SearchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search for friends or groups"
            className="inputSearch"
          />
        </div>
      </div>
      <div className="rightbar">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">timeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <div className="topbarIconBadge">1</div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default TopBar;
