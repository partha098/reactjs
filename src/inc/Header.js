import {Link, NavLink} from "react-router-dom";
function Header(){
    return(
<nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Header; 