import searchIcon from "../Images/search.png";
import bell from "../Images/bell.png";

export default function Search() {
  return (
    <div className="search">
      <div className="wrapper">
        <div className="inputContainer">
          <input type="text" placeholder="Search..." />
          <img src={searchIcon} alt="search icon" />
        </div>
        <img src={bell} alt="bell" className="bell" />
      </div>
    </div>
  );
}
