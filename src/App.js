import logo from './logo.svg';
import './App.css';
import LoginPage  from './mobile';
import { Routes ,Route } from 'react-router-dom';
import Users from './user';
import DashBoard from './dashboard';

function App() {
  return (
    <div id="main">

      
      <Routes>
      <Route path="/" exact  element={<LoginPage/>}></Route>
      <Route path='/dashboard' exact element={<DashBoard/>}></Route>
      <Route path="users" element={<Users/>}></Route>
     </Routes> 
    
    </div>
  );
}

export default App;
