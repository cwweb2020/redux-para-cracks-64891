import { navbar_links } from "../../constants/navbar";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          display: "flex",
          width: "50%",
          gap: "20px",
          boxShadow: "1px 2px 5px #a1a1a1",
          padding: "20px",
          borderRadius: " 0 0 10px 10px",
          margin:'0'
        }}
      >
        {navbar_links.map((link, index) => (
          <NavbarItem key={index} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
