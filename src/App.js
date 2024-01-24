import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import UserDashboard from './Components/UserDashboard';

function App() {

  return (
    <>

      <Routes>
        <Route path='' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<UserDashboard />}></Route>
      </Routes>

    </>
  );
}

export default App;
