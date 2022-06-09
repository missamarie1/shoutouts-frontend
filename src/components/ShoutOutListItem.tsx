import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOutModel, { User } from "../models/Shoutout";
import "./ShoutOutListItem.css";

interface Props {
  shoutOut: ShoutOutModel;
  deleteHandler: (id: string) => void;
  upvoteHandler: (user: User, id: string) => void;
}

const ShoutOutListItem = ({
  shoutOut,
  deleteHandler,
  upvoteHandler,
}: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <li className="ShoutOutListItem">
      <div className="info">
        <button onClick={() => deleteHandler(shoutOut?._id!)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <p className={`${shoutOut.to === user?.displayName ? "me" : ""} `}>
          To:
          <Link to={`/user/${shoutOut.to}`}>
            {" "}
            {""}
            {shoutOut.to}
          </Link>
        </p>

        <div className="from-container">
          <p className="from">From:</p>

          {shoutOut.photoUrl && (
            <img
              src={shoutOut.photoUrl}
              alt={shoutOut.from}
              className="from-img"
            />
          )}
          <p className={`${shoutOut.from === user?.displayName ? "me" : ""} `}>
            {shoutOut.from}
          </p>
        </div>
      </div>
      <div className="message">
        <p>"{shoutOut.text}"</p>
        {shoutOut.image && (
          <img
            src={shoutOut.image}
            alt={shoutOut.text}
            className="shoutout-img"
          />
        )}
      </div>
      {user ? (
        <div className="votes-container">
          <button>downvote</button>
          <p>{shoutOut.likes ? shoutOut.likes?.length : "0"} likes</p>
          <button
            onClick={() =>
              upvoteHandler(
                { displayName: user.displayName || "anonymous", uid: user.uid },
                shoutOut._id!
              )
            }
          >
            upvote
          </button>
        </div>
      ) : (
        <div>
          <p>TODO</p>
          <p>Please log in to upvote / downvote</p>
        </div>
      )}
    </li>
  );
};

export default ShoutOutListItem;
