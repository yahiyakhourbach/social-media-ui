import { BusinessCenter, Room } from '@material-ui/icons';
import './IntroProfile.css';

const IntroProfile = () => {
  return (
    <div className="Intro-container">
      <h2 className="title">Intro</h2>
      <div className="intro-content">
        <div className="intro-btn-item">Add Bio</div>
        <div className="intro-infos">
          <BusinessCenter className="profile-intro-icon" />
          <span className="intro-info-text">
            Worked at <span>FC Barelona</span>
          </span>
        </div>
        <div className="intro-infos">
          <Room className="profile-intro-icon" />
          <span className="intro-info-text">
            from <span>Naples, italy</span>
          </span>
        </div>
        <div className="intro-btn-item">Edite Detiales</div>
        <div className="intro-btn-item">Add Hobbies</div>
        <div className="intro-btn-item">Add Featured</div>
      </div>
    </div>
  );
};

export default IntroProfile;
