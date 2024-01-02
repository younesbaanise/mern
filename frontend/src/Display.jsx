import Search from "./Look";
import SideBar from "./aside";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { SlTrash } from "react-icons/sl";
import AddUser from "./plusUser";
import defimg from "../Images/defimg.png";

function Display() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://simple-app-gold.vercel.app/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("https://simple-app-gold.vercel.app/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <main>
      <SideBar />
      <div className="mainContent">
        <Search />
        <Outlet />
        <AddUser />
        <table width={700}>
          <thead className="titles">
            <tr className="trToleft">
              <th className="image"></th>
              <th className="name">Name </th>
              <th className="email">Email </th>
              <th className="number">Phone </th>
              <th className="enrole">EnrollNumber </th>
              <th className="date">Date of admission </th>
              <th></th>
            </tr>
          </thead>
          <tbody className="tbodyLeft">
            {users.map((user) => (
              <tr key={user._id}>
                <div className="singleUser">
                  <td>
                    <img src={defimg} alt="user" />
                  </td>
                  <td className="name">{user.firstName}</td>
                  <td className="email">{user.email}</td>
                  <td className="number">{user.phone}</td>
                  <td className="enrole">{user.enrollNumber}</td>
                  <td className="date">{user.admissionDate}</td>
                  <td className="edit">
                    <Link to={`/update/${user._id}`}>
                      <LuPencil className="icon" />
                    </Link>
                    <SlTrash
                      className="icon cursor"
                      onClick={() => handleDelete(user._id)}
                    />
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default Display;