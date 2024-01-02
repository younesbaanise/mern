import { Link } from "react-router-dom";

export default function AddUser({ form }) {
  return (
    <div className="add">
      {form && <p>Add student</p>}
      {!form && <p>Students List</p>}
      {!form && (
        <Link to="/create">
          <button className="cursor">ADD NEW STUDENT</button>
        </Link>
      )}
    </div>
  );
}
