import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to="/"> Fast React Pizza Co. </Link>
    </header>
  );
}

export default Header;
