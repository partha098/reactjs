import {NavLink} from 'react-router-dom'
function Menu(){
    return(
<>

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink activeClassName="active"  className="nav-link" to="/">Active</NavLink >
      </li>
     <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
      </li>
    
    </ul>
  </div>
</nav>
</>


    );
}

export default Menu;