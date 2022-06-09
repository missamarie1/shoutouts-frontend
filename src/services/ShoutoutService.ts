import axios from "axios";
import ShoutOut, { User } from "../models/Shoutout";
import Shoutout from "../models/Shoutout";

const baseUrl = process.env.REACT_APP_API_URL || "";

export const getAllShoutOuts = (): Promise<ShoutOut[]> => {
  return axios.get(`${baseUrl}`).then((res) => res.data);
};

export const getAllShoutOutsToUser = (user: string): Promise<ShoutOut[]> => {
  return axios
    .get(`${baseUrl}/to/${encodeURIComponent(user)}`)
    .then((res) => res.data);
};

export const getAllShoutoutsToFromMe = (me: string): Promise<ShoutOut[]> => {
  return axios
    .get(`${baseUrl}/me/${encodeURIComponent(me)}`)
    .then((res) => res.data);
};

export const postNewShoutOut = (shoutoutBody: ShoutOut): Promise<void> => {
  return axios.post(`${baseUrl}`, shoutoutBody).then((res) => res.data);
};

export const deleteShoutout = (id: string): Promise<void> => {
  return axios.delete(`${baseUrl}/${id}`);
};

export const upvoteShoutout = (user: User, id: string): Promise<void> => {
  return axios.put(`${baseUrl}/upvote/${id}`, user).then((res) => res.data);
};
