import { Link } from "react-router-dom";
import PokemonLogo from "../assets/images/pokemon-logo.svg";

function Header() {
  return (
    <div className="sticky top-0 flex items-center justify-center md:justify-between p-8 md:p-4 bg-white">
      <Link to="/" className="flex items-center justify-center gap-4">
        <img src={PokemonLogo} alt="Logo" className="w-10" />
        <h1 className="font-bold text-3xl md:text-xl">Pokemon</h1>
      </Link>
    </div>
  );
}

export default Header;
