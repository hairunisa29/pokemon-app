import { Link } from "react-router-dom";
import PokemonLogo from "../assets/images/pokemon-logo.svg";

function Header() {
  return (
    <div className="sticky z-10 top-0 flex items-center justify-center md:justify-between p-8 md:p-4 bg-white">
      <Link to="/" className="flex items-center justify-center gap-4">
        <img src={PokemonLogo} alt="Logo" className="w-10" />
        <h1 className="font-bold text-3xl md:text-xl">Pokemon</h1>
      </Link>

      <div className="hidden md:flex gap-4">
        <Link to="/" className="font-bold">Home</Link>
        <Link to="/my-collection" className="font-bold">My Collection</Link>
      </div>
    </div>
  );
}

export default Header;
