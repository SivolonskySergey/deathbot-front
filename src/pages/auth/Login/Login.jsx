import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthProvider';

import axios from '../../../api/axios';
const LOGIN_URL = '/auth';

function LoginPage() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ username, pwd }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log(JSON.stringify(response));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      console.log(accessToken);
      const roles = response?.data?.roles;
      console.log(roles);
      setAuth({ username, pwd, roles, accessToken });
      setUsername('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        console.log(err);
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unautorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1> You are logged in!</h1>
          <br />
          <p>
            <span className="line" onClick={() => navigate('/')}>
              <a href="#">Go to Home</a>
            </span>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account? <br />
            <span className="line" onClick={() => navigate('/register')}>
              {/* put router link here */}
              <a href="#">Sign up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

export default LoginPage;
