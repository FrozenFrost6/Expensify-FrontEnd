import { NavLink } from "react-router-dom";

function Header () {
    return (
      <header>
        <h1>Expensify</h1>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/add-expense">Add Expense</NavLink>
        <NavLink to="/help">Help</NavLink>
      </header>
    );
} 

export default Header;