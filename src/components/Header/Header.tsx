import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/">About</NavLink>
    </header>
  );
};

export default Header;
