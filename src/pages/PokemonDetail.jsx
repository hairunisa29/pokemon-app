import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import useSWR from "swr";
import Stats from "../components/Stats";
import { colors } from "../data/static";

function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const fetchData = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetchData,
    {
      revalidateOnFocus: false,
    }
  );

  return (
    <section className="px-4 md:px-48 pt-4 pb-24">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SyncLoader color="#072AC8" />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="rounded-lg p-4 shadow-md shadow-indigo-100 bg-white">
            <div className="flex justify-between">
              <h1 className="font-bold text-xl capitalize text-primary">
                {data.name}
              </h1>

              <div className="flex gap-2">
                {data.types.map((item) => (
                  <span
                    key={item.type.name}
                    className={`p-2 rounded-lg text-xs text-white capitalize ${
                      colors[item.type.name]
                    }`}
                  >
                    {item.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <img
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
                className="w-32 md:ml-20 md:w-56 self-center"
              />

              <div className="flex flex-col gap-2">
                {data.stats.map((item) => (
                  <Stats
                    key={item.stat.name}
                    stat={item.stat.name}
                    value={item.base_stat}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg p-4 shadow-md shadow-indigo-100 bg-white">
            <h2 className="text-lg">Moves</h2>

            <div className="flex flex-wrap gap-2 mt-8">
              {data.moves.slice(0, 5).map((item) => (
                <span
                  key={item.move.name}
                  className="p-2 rounded-lg text-xs text-white capitalize bg-[#F14B3D]"
                >
                  {item.move.name}
                </span>
              ))}
            </div>
          </div>

          <button
            className="flex w-fit p-2 gap-2 self-center justify-center items-center rounded-lg text-white text-sm bg-primary transform transition duration-1000 hover:scale-105"
            onClick={() => navigate(`/catch/${name}`)}
          >
            <MdOutlineCatchingPokemon className="text-2xl" />
            Catch
          </button>
        </div>
      )}
    </section>
  );
}

export default PokemonDetail;
