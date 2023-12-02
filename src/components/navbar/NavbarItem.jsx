/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavbarItem = (props) => {
  const { path, text } = props;
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={path}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
