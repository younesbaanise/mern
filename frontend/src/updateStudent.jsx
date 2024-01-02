import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddUser from "./plusUser";
import Search from "./Look";
import SideBar from "./aside";
import { Outlet } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

function UpdateUser() {
  const { id } = useParams();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enrollNumber, setEnrollNumber] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://test-repo-six-ruby.vercel.app/getUser" + id)
      .then((result) => {
        console.log(result);

        setFirstName(result.data.firstName);
        setLastName(result.data.lastName);
        setEmail(result.data.email);
        setPhone(result.data.phone);
        setEnrollNumber(result.data.enrollNumber);
      })
      .catch((err) => console.log(err));
  });

  const update = (e) => {
    e.preventDefault();
    axios
      .put("https://test-repo-six-ruby.vercel.app/updateUser/" + id, {
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
          <form onSubmit={update}>
            <h2>Student</h2>
            <hr className="ligne" />
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder=""
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder=""
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder=""
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="">Phone number</label>
            <input
              type="text"
              placeholder=""
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="">Enroll number</label>
            <input
              type="text"
              placeholder=""
              required
              value={enrollNumber}
              onChange={(e) => setEnrollNumber(e.target.value)}
            />

            <p>Photo de profil</p>
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

            <button className="cursor">UPDATE STUDENT</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default UpdateUser;
