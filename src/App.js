import React from "react";
import "./App.css";
import Logo from "./Assets/FES.svg";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user);
      }
    });
  }, []);

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "farouk@email.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "farouk@email.com", "test123")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function logout() {
    signOut(auth);
    setUser({login, register});
  }
  return (
    <div className="App">
      <nav>
        <figure>
          <img id="personal-logo" src={Logo} alt="" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <button className="nav__link--anchor" onClick={register}>
              Register
            </button>
          </li>
          <li className="nav__link">
            <button className="nav__link--anchor" onClick={login}>
              Login
            </button>
          </li>
          <li className="nav__link">
            <button
              className="nav__link--anchor nav__link--anchor-primary"
              onClick={logout}
            >
              {loading ? "loading..." : user.email}
            </button>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
