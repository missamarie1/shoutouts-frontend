import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import ShoutOut from "../models/Shoutout";
import {
  deleteShoutout,
  getAllShoutOuts,
  postNewShoutOut,
} from "../services/ShoutoutService";
import "./Main.css";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutListItem from "./ShoutOutListItem";

const Main = () => {
  const { user } = useContext(AuthContext);
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>();
  useEffect(() => {
    getAllShoutOuts().then((res) => {
      setShoutOuts(res);
    });
  }, []);

  const addShoutOut = (so: ShoutOut): void => {
    postNewShoutOut(so).then(() => {
      getAllShoutOuts().then((response) => setShoutOuts(response));
    });
  };

  const deleteHandler = (id: string): void => {
    deleteShoutout(id).then(() => {
      getAllShoutOuts().then((response) => setShoutOuts(response));
    });
  };

  return (
    <div className="Main">
      {user ? (
        <ShoutOutForm addShoutOut={addShoutOut} toUser="" />
      ) : (
        <p>Please sign in to add a shoutout!</p>
      )}
      <ul>
        {shoutOuts?.map((item) => (
          <ShoutOutListItem
            key={item._id}
            shoutOut={item}
            deleteHandler={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
