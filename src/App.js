import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/loginandsignup/Login';
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import CreateAccount from './components/loginandsignup/CreateAccount';
import ForgetPass from './components/loginandsignup/ForgetPass';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            {/* login signup forgot pass routes start */}
              <Route path='/' element={<Login/>} />
              <Route path='/create-account' element={<CreateAccount/>} />
              <Route path='/forgot-password' element={<ForgetPass/>} />
            {/* login signup forgot pass routes end */}

            {/* dashboard start */}
              <Route path='/dashboard/*' element={<Dashboard/>} />
              
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
