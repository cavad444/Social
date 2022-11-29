import {Routes,Route} from 'react-router-dom';
import Header from "./sections/header/header";
import Login from './navigations/login/login';
import SignUp from './navigations/login/sign-up';
import InstagramLogo from './instagram-logo/instagram-logo';
import Profile from './navigations/profile/profile';
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/' element={<InstagramLogo/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
