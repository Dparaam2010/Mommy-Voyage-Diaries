import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <main className="TipsPage">
      <div id="image-wrapper">
      <Link to="/tips">Tiny Travelers Advice</Link>
      &nbsp; | &nbsp;
      <Link to="/tips/new">Chime In with Your Mommy Tips</Link>
      &nbsp;&nbsp;
      <span>| {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
      </main>
    </nav>
  );
}