import { NavLink } from "react-router-dom";


export default function Menu({ links }) {

  let listItems = links.map(function (link) {
    console.log({ link });
    return (
      <li key={link.id} >
        <button key={link.id} className="menuButton">
          <NavLink key={link.id}
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.title}
          </NavLink>
        </button>
      </li>
    );
  });

  return (
    <div className="containerMenu">
      <nav>
        <ul>
          {listItems}
          {/* <li>
              <button className="menuButton">
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
                Portfolio
              </NavLink>
            </button>
          </li> */}
        </ul>
      </nav>
    </div >
  );
}
