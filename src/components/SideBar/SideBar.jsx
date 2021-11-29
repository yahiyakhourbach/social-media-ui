import {
  Bookmarks,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilled,
  RssFeed,
  School,
  VideoCall,
  WorkOutline,
} from '@material-ui/icons';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebare">
      <div className="sideBarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="SideBarItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sideBarIcon" />
            <span className="SideBarItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sideBarIcon" />
            <span className="SideBarItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sideBarIcon" />
            <span className="SideBarItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sideBarIcon" />
            <span className="SideBarItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sideBarIcon" />
            <span className="SideBarItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="SideBarItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sideBarIcon" />
            <span className="SideBarItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sideBarIcon" />
            <span className="SideBarItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebar-btn">show more</button>
        <hr className="hrSideBar" />
        <ul className="friendlist">
          <li className="friendlistItem">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="imgFriendSidebar"
            />
            <span className="friendName">jihan bikler</span>
          </li>
          <li className="friendlistItem">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="imgFriendSidebar"
            />
            <span className="friendName">jihan bikler</span>
          </li>
          <li className="friendlistItem">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="imgFriendSidebar"
            />
            <span className="friendName">jihan bikler</span>
          </li>
          <li className="friendlistItem">
            <img
              src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="imgFriendSidebar"
            />
            <span className="friendName">jihan bikler</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
