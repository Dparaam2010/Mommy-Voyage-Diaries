import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/tips">Tips for Traveling Mommies</Link>
      &nbsp; | &nbsp;
      <Link to="/tips/new">What To Do with your Kids</Link>
      &nbsp;&nbsp;
      <span>| {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}