import profile from "../Images/profile.png";
import { BiHome } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="top">
        <h1>CRUD OPERATIONS</h1>
        <img src={profile} alt="profile photo" />
        <p className="name">Karthi Madesh</p>
        <p className="role">Admin</p>
        <div className="home">
          <BiHome />
          <span>Home</span>
        </div>
      </div>
      <div className="logOut">
        <span>Log Out</span>
        <IoLogOutOutline />
      </div>
    </div>
  );
}
