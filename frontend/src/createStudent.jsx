import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddUser from "./plusUser";
import { BsUpload } from "react-icons/bs";
import Search from "./Look";
import SideBar from "./aside";
import { Outlet } from "react-router-dom";

function CreateUser() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enrollNumber, setEnrollNumber] = useState();

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://simple-app-gold.vercel.app/createUser", {
        firstName,
        lastName,
        email,
        phone,
        enrollNumber,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <SideBar />
      <div className="mainContent">
        <Search />
        <Outlet />
        <AddUser form />
        <div className="formContainer">
          <form onSubmit={Submit}>
            <h2>New Student</h2>
            <hr className="ligne" />

            <label htmlFor="">First Name</label>
            <input
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="">Last Name</label>
            <input
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              required
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="">Enroll Number</label>
            <input
              type="text"
              required
              onChange={(e) => setEnrollNumber(e.target.value)}
            />
            <label>Photo de profil</label>
            <div className="uploadImage">
              <div className="uploadIcon">
                <BsUpload className="upicn" />
              </div>
              <div className="imagePromps">
                <p>
                  Glisser-déposez le fichier ici, ou <span>Parcourir</span>
                </p>
                <p className="second">
                  Format JPG, JPEG ou PNG de moins de 1Mo
                </p>
              </div>
            </div>

            <button className="cursor">ADD STUDENT</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default CreateUser;
