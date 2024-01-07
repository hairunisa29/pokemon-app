import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";
import useSWR from "swr";
import BackgroundImg from "../assets/images/background.jpg";
import Modal from "../components/Modal";
import { addItem } from "../store/reducers/collectionSlice";

function PokemonCatch() {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState("");

  const { collectionItems } = useSelector((state) => state.collection);

  const fetchData = (url) => axios.get(url).then((response) => response.data);

  const { data, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetchData,
    {
      revalidateOnFocus: false,
    }
  );

  const onClickCatch = () => {
    const result = Math.random() > 0.5;

    if (result) {
      setShowModal(true);
    } else {
      alert("You missed!");
    }
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const payload = {
      ...data,
      alias: nickname,
    };
    const foundNickname = collectionItems.find(
      (item) => item.alias === nickname && item.name === name
    );

    if (foundNickname === undefined) {
      dispatch(addItem(payload));
      setShowModal(false);
      setNickname("");
      navigate("/");
    } else {
      alert(`Nickname ${nickname} already exist!`);
    }
  };

  return (
    <section
      className="p-8"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <SyncLoader color="#072AC8" />
        </div>
      ) : (
        <div className="grid grid-rows-2">
          {showModal && (
            <Modal
              title="Congratulation!"
              description={`You caught ${name}`}
              setNickname={setNickname}
              onSubmitModal={onSubmitModal}
              handleClose={() => {
                setShowModal(false);
                setNickname("");
              }}
            />
          )}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-4">
            <h1 className="font-bold text-white bg-secondary border-2 rounded-lg p-2">
              A wild {name} has appeared
            </h1>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
              className="w-42 h-48"
            />
          </div>

          <div className="flex flex-col items-center self-end gap-4">
            <span className="w-fit border-2 p-2 rounded-lg text-white">
              What will you do?
            </span>

            <div className="flex justify-center gap-4">
              <button
                className="w-fit p-2 rounded-lg text-white bg-primary"
                onClick={onClickCatch}
              >
                Catch
              </button>

              <button
                className="w-fit p-2 rounded-lg text-white bg-[#F14B3D]"
                onClick={() => navigate("/")}
              >
                Run
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PokemonCatch;
