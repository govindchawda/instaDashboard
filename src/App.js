// import logo from './logo.svg';
import { jwtDecode } from 'jwt-decode';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import Navbar from './componants/Navbar';
import LeftSideBar from './componants/LeftSideBar';
import MiddleBar from './componants/MiddleBar';
import RIghtSideBar from './componants/RightSideBar';
function App() {
  return (
    // id 746275054981-mnul380ivd16k553fp7u19ooirnak4f1.apps.googleusercontent.com
    <>
      {/* <GoogleLogin
        onSuccess={credentialResponse => {
          // console.log(credentialResponse);
          let decodeData = (jwtDecode(credentialResponse.credential));
          if(decodeData.email_verified === true){
            alert('hii');
            localStorage.setItem('hii',JSON.stringify('hii'))
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />; */}
      <Navbar/>
      <div id='hero-content'>
        <LeftSideBar/>
        <MiddleBar/>
        <RIghtSideBar/>
      </div>
    </>
  );
}

export default App;
