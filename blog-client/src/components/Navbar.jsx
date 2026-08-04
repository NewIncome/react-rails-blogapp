import { Link } from "react-router-dom";

export default function Navbar() {
  //Posts List Link (Root Path) | Link to Create New Post (Post form)

  return (
    <nav>
      <Link to="/">Posts List</Link>
      {" | "}
      <Link to="/new">New Post</Link>
    </nav>
  );
}
