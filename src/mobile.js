import React ,{ useState } from 'react';
import './mobile.css'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate=useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const validLogins = [
    { email: 'praveen', password: 'praveen123' },
    { email: 'surya', password: 'surya123' },
    { email: 'venkat', password: 'venkat123' },
    { email: 'naryana', password: 'narayana123' },
  ];

  const handleLogin = () => {
    const isValidLogin = validLogins.some(
      (validLogin) =>
        validLogin.email === login.email && validLogin.password === login.password
    );

    if (isValidLogin) {
      navigate('./dashboard');
    } else {
      // Invalid login, show an alert
      alert('Invalid login credentials. Please try again.');
    }
  };

  return (
    <div id="box">
      <img src="imgs/Group 3.png" alt="Logo" id="logo1"/><br />
      <input className="search"
        
        type="email"
        placeholder="Email"
        name="email"
        value={login.email}
        onChange={(e) => setLogin({ ...login, email: e.target.value })}
      /><br />
      <input className="search"
        
        type="password"
        placeholder="Password"
        name="password"
        value={login.password}
        onChange={(e) => setLogin({ ...login, password: e.target.value })}
      /><br />
      <button onClick={handleLogin} id="log">Login</button><br />
      <div style={{ height:'50px'}}>
      <h6 id="password1">Forgot password?</h6>
      </div>
    </div>
  );
};
export default LoginPage;