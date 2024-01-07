import axios from "axios";
import {useState } from "react";
import Card from "../components/Card";
import { SyncLoader } from "react-spinners";
import useSWR from "swr";

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

  function gotoNextPage() {
    setCurrentUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentUrl(prevPageUrl);
  }

  return (
    <section>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SyncLoader />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 p-8 pt-4 pb-24 gap-4">
          {dataPokemon.map((item) => (
            <Card key={item.id} data={item} />
          ))}
          {gotoPrevPage && (
            <button
              onClick={() => {
                setDataPokemon([]);
                setCurrentUrl(prevPageUrl);
              }}
            >
              Previous
            </button>
          )}
          {gotoNextPage && (
            <button
              onClick={() => {
                setDataPokemon([]);
                setCurrentUrl(nextPageUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Home;
