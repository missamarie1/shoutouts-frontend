export interface User {
  displayName: string;
  uid: string;
}

export default interface ShoutOut {
  _id?: string;
  to: string;
  from: string;
  text: string;
  photoUrl?: string;
  image?: string;
  likes?: User[];
}
