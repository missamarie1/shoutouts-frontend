import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOut, { User } from "../models/Shoutout";
import {
  getAllShoutoutsToFromMe,
  upvoteShoutout,
} from "../services/ShoutoutService";
import "./MeRoute.css";
import ShoutOutListItem from "./ShoutOutListItem";

const MeRoute = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myShoutouts, setMyShoutouts] = useState<ShoutOut[]>();
  useEffect(() => {
    if (user) {
      getAllShoutoutsToFromMe(user?.displayName || "Anonymous").then((res) => {
        setMyShoutouts(res);
      });
    } else {
      navigate("/");
    }
  }, [user]);
  const upvoteHandler = (user: User, id: string): void => {
    upvoteShoutout(user, id).then(() => {
      getAllShoutoutsToFromMe(user?.displayName || "Anonymous").then((res) =>
        setMyShoutouts(res)
      );
    });
  };
  return (
    <div className="MeRoute">
      <ul>
        {myShoutouts?.map((item) => (
          <ShoutOutListItem
            key={item._id}
            shoutOut={item}
            deleteHandler={() => {}}
            upvoteHandler={upvoteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default MeRoute;
