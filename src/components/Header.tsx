import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import logo from "../assets/GC.gif";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <h1>
        <Link to="/" className="header-h1">
          <img src={logo} alt="Grand Circus Shoutouts" className="logo" />
        </Link>
      </h1>
      {/* user info */}
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {user ? (
        <div className="profile-section">
          <p className="welcome">
            Welcome, <span className="user-name">{user?.displayName}</span>
          </p>{" "}
          <img src={user.photoURL!} alt="profile" className="profile-pic" />
          <p>
            <Link to="/me" className="my-shoutouts">
              View your shoutouts!
            </Link>
          </p>
          <button onClick={signOut} className="log">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={signInWithGoogle} className="log sign-in">
          Sign in with Google
        </button>
      )}
    </header>
  );
};

export default Header;
