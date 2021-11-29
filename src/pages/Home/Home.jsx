import SideBar from '../../components/SideBar/SideBar';
import TopBar from '../../components/Topbar/TopBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import './Home.css';
const Home = () => {
  return (
    <>
      <TopBar />
      <div className="contianer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
