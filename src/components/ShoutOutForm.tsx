import { FormEvent, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import ShoutOut from "../models/Shoutout";
import "./ShoutOutForm.css";

interface Props {
  addShoutOut: (so: ShoutOut) => void;
  toUser: string;
}

const ShoutOutForm = ({ addShoutOut, toUser }: Props) => {
  const { user } = useContext(AuthContext);
  const [to, setTo] = useState(toUser);
  const [from, setFrom] = useState(user?.displayName || "Anonymous");
  const [text, setText] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addShoutOut({ to, from, text, photoUrl: user?.photoURL || "" });
    setTo(toUser);
    setFrom(user?.displayName || "Anonymouse");
    setText("");
  };

  return (
    <form className="ShoutOutForm" onSubmit={submitHandler}>
      <label htmlFor="to">To:</label>
      <input
        type="text"
        name="to"
        id="to"
        onChange={(e) => setTo(e.target.value)}
        value={to}
        disabled={toUser ? true : false}
      />
      <label htmlFor="from">From:</label>
      <input
        type="text"
        name="from"
        id="from"
        onChange={(e) => setFrom(e.target.value)}
        value={from}
        disabled
      />
      <label htmlFor="text">Message:</label>
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button>Submit Shoutout</button>
    </form>
  );
};

export default ShoutOutForm;
