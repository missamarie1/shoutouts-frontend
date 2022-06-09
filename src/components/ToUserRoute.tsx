import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ShoutOut, { User } from "../models/Shoutout";
import {
  deleteShoutout,
  getAllShoutOutsToUser,
  postNewShoutOut,
  upvoteShoutout,
} from "../services/ShoutoutService";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutListItem from "./ShoutOutListItem";
import "./ToUserRoute.css";

const ToUserRoute = () => {
  const { user } = useContext(AuthContext);
  const to: string = useParams().to!;
  const [usersShoutouts, setUsersShoutouts] = useState<ShoutOut[]>();

  useEffect(() => {
    getAllShoutOutsToUser(to).then((res) => {
      setUsersShoutouts(res);
    });
  }, [to]);
  const addShoutOut = (so: ShoutOut): void => {
    postNewShoutOut(so).then(() => {
      getAllShoutOutsToUser(to).then((res) => {
        setUsersShoutouts(res);
      });
    });
  };
  const deleteHandler = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAllShoutOutsToUser(to).then((res) => {
        setUsersShoutouts(res);
      });
    });
  };
  const upvoteHandler = (user: User, id: string): void => {
    upvoteShoutout(user, id).then(() => {
      getAllShoutOutsToUser(to).then((res) => {
        setUsersShoutouts(res);
      });
    });
  };
  return (
    <div className="ToUserRoute">
      <h2>All Shoutouts to: {to}</h2>
      <ul>
        {usersShoutouts?.map((item) => (
          <ShoutOutListItem
            key={item._id}
            shoutOut={item}
            deleteHandler={deleteHandler}
            upvoteHandler={upvoteHandler}
          />
        ))}
      </ul>
      {user ? (
        <ShoutOutForm addShoutOut={addShoutOut} toUser="" />
      ) : (
        <p>Please sign in to add a shoutout!</p>
      )}
    </div>
  );
};

export default ToUserRoute;
