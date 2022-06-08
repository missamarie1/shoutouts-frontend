import { Link } from "react-router-dom";
import ShoutOutModel from "../models/Shoutout";
import "./ShoutOutListItem.css";

interface Props {
  shoutOut: ShoutOutModel;
  deleteHandler: (id: string) => void;
}

const ShoutOutListItem = ({ shoutOut, deleteHandler }: Props) => {
  return (
    <li className="ShoutOutListItem">
      <button onClick={() => deleteHandler(shoutOut?._id!)}>x</button>
      <p>
        <Link to={`/user/${shoutOut.to}`}> To: {shoutOut.to}</Link>
      </p>
      <div className="from-container">
        <p>From: </p>
        {shoutOut.photoUrl && (
          <img
            src={shoutOut.photoUrl}
            alt={shoutOut.from}
            className="from-img"
          />
        )}
        <p>{shoutOut.from}</p>
      </div>
      <p>"{shoutOut.text}"</p>
    </li>
  );
};

export default ShoutOutListItem;
