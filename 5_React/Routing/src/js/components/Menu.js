import { NavLink } from "react-router-dom";

export default function Menu({ links }) {
  let hrefs = links.map(function (link) {
    return (
      <>
        {/* //     <li>
    //     <button className="menuButton">
    //       <a href={link.path} className={( {isActive }) => (isActive ? "active" : "")}>{link.title}</a>
    //     </button>
    //   </li> */}
        <li>
          <button className="menuButton">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.title}
            </NavLink>
          </button>
        </li>
      </>
    );
  });

  return (
    <>
      <div className="containerMenu">
        {/* <nav>
          <ul>{hrefs}</ul>
        </nav> */}

        {/* {hrefs}
        <NavLink to="portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink> */}

        {hrefs}
        <NavLink to="portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
            Portfolio
        </NavLink>

      </div>
    </>
  );
}
