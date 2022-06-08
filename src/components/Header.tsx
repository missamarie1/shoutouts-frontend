import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="Header">
      <h1>
        <Link to="/">GC Shoutouts</Link>
      </h1>
      {/* user info */}
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

      {user ? (
        <>
          <button onClick={signOut}>Sign Out</button>
          <p>Welcome {user?.displayName}</p>{" "}
          <img src={user.photoURL!} alt="profile picture" />
          <p>
            <Link to="/me">See my shoutouts!</Link>
          </p>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </header>
  );
};

export default Header;
