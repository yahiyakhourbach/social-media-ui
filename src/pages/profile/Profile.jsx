import { AddCircle, Edit } from '@material-ui/icons';
import SideBar from '../../components/SideBar/SideBar';
import TopBar from '../../components/Topbar/TopBar';
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="profile-container">
          <div className="profileWrapper">
            <div className="topProfile">
              <div className="coverImg-container">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                  className="imgcover"
                />
              </div>
              <div className="profileInfoContainer">
                <div className="profileInfo">
                  <div className="leftInfo">
                    <img
                      src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                      className="imgProfile"
                    />
                    <div className="infos">
                      <div className="profile-username">yahiya khourbach</div>
                      <span className="friendscount">255 friends</span>
                    </div>
                  </div>
                  <div className="rightInfo">
                    <button className="addstory">
                      <AddCircle style={{ marginRight: '5px' }} /> add to story
                    </button>
                    <button className="editprofile">
                      <Edit style={{ marginRight: '5px' }} />
                      edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hrProfile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
