import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineCatchingPokemon } from "react-icons/md";

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 flex md:hidden justify-end w-full">
      <Link
        to="/"
        className="flex flex-col border-[1px] w-full p-2 items-center"
      >
        <GoHomeFill className="text-5xl" />
        <span className="text-xl font-bold">Home</span>
      </Link>

      <Link
        to="/"
        className="flex flex-col border-[1px] w-full p-2 items-center"
      >
        <MdOutlineCatchingPokemon className="text-5xl" />
        <span className="text-xl font-bold">My Collection</span>
      </Link>
    </div>
  );
}

export default BottomNavbar;
