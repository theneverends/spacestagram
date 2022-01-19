import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Spacestgram</Link>
          </li>
          <li>
            <Link to="/collection">My Collection</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};