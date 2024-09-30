import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import SignLayout from './layout/SignLayout';
import HomeLayout from './layout/HomeLayout';
import DashboardLayout from './layout/DashboardLayout';
import ProfileLayout from './layout/ProfileLayout';

import Login from './component/signin/Login';
import Register from './component/signin/Register';
import Clubs from './component/main/Clubs';
import DiscussionForum from './component/main/DiscussionForum';
import Events from './component/main/Events';
import Project from './component/main/Project';
import YourProjects from './component/main/dashboard/YourProjects';
import Applied from './component/main/dashboard/Applied';
import Profile from './component/main/profile/Profile';
import ChangePassword from './component/main/profile/ChangePassword';




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
            <Route path="dashBoard" element={ <DashboardLayout/> }>
              <Route path="yourProject" element={ <YourProjects/> }/>
              <Route path="applied" element={ <Applied/>  } />
              <Route index element={ <YourProjects/> } />
            </Route>
            <Route path="profile" element={ <ProfileLayout/>}>
              <Route path="profile" element={ <Profile/>  } />
              <Route path="changePassword" element={ <ChangePassword/> }/>
              <Route index element={ <Profile/> } />
            </Route>
            <Route index element={ <Project/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
