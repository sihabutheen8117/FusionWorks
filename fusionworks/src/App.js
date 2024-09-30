import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import SignLayout from './layout/SignLayout';
import HomeLayout from './layout/HomeLayout';
import Login from './component/signin/Login';
import Register from './component/signin/Register';
import Clubs from './component/main/Clubs';
import DashBoard from './component/main/DashBoard';
import DiscussionForum from './component/main/DiscussionForum';
import Events from './component/main/Events';
import Profile from './component/main/Profile';
import Project from './component/main/Project';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout/>} />
          <Route path="/sign" element={ <SignLayout/> } >
            <Route path="login" element={ <Login/> }/>
            <Route path="register" element={ <Register/> }/>
          </Route>
          <Route path="/main" element={ <MainLayout/>} >
            <Route path="project" element={ <Project/>} />
            <Route path="events" element={ <Events/>} />
            <Route path="discussionForum" element={ <DiscussionForum/>} />
            <Route path="clubs" element={ <Clubs/>} />
            <Route path="dashBoard" element={ <DashBoard/>} />
            <Route path="profile" element={ <Profile/>} />
            <Route index element={ <Project/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
