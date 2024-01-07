import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";
import { SyncLoader } from "react-spinners";
import useSWR from "swr";
import { Link } from "react-router-dom";

function Home() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");

  const getPokemon = (res) => {
    res.map(async (item) => {
      await axios.get(item.url).then((result) => {
        setDataPokemon((state) => {
          state = [...state, result.data].sort((a, b) => a.id - b.id);
          return state;
        });
      });
    });
  };

  const fetchData = (url) => axios.get(url).then((response) => response.data);

  const { isLoading } = useSWR(currentUrl, fetchData, {
    // onError: (error) => {
    //   if (error) {
    //     PopUpAlert("Error", error?.message, "error");
    //   }
    // },
    onSuccess: (data) => {
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      getPokemon(data.results);
    },
    revalidateOnFocus: false,
  });

  return (
    <section className="px-8 pt-4 pb-24">
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SyncLoader color="#072AC8" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {dataPokemon.map((item) => (
              <Link to={`/pokemon/${item.name}`} key={item.id}>
                <Card data={item} />
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-8">
            <button
              className={`w-28 p-2 rounded-lg text-sm text-white ${
                !prevPageUrl
                  ? "bg-blue-200"
                  : "bg-primary hover:bg-white hover:border-primary hover:text-primary"
              }  border-[1px]`}
              onClick={() => {
                setDataPokemon([]);
                setCurrentUrl(prevPageUrl);
              }}
              disabled={!prevPageUrl}
            >
              Previous
            </button>

            <button
              className="w-28 p-2 bg-primary rounded-lg text-sm text-white hover:bg-white border-[1px] hover:border-primary hover:text-primary"
              onClick={() => {
                setDataPokemon([]);
                setCurrentUrl(nextPageUrl);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
