import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { removeItem } from "../store/reducers/collectionSlice";

function CollectionCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItem = (name, nickname) => {
    const payload = {
      name,
      nickname,
    };

    dispatch(removeItem(payload));
  };
  return (
    <div className="flex flex-col rounded-lg p-4 shadow-md shadow-indigo-100 bg-white hover:bg-indigo-100">
      <button
        className="self-end"
        onClick={() => deleteItem(data.name, data.alias)}
      >
        <BiTrash className="text-3xl hover:text-red-700" />
      </button>

      <div className="flex flex-col items-center justify-center" onClick={() => navigate(`/pokemon/${data.name}`)}>
        <img
          alt={data.name}
          src={data.sprites.other.dream_world.front_default}
          className="w-32 h-32"
        />

        <h1 className="mt-2 font-semibold text-lg text-primary">{data.name}</h1>

        <p className="mt-2 font-semibold text-secondary">({data.alias})</p>
      </div>
    </div>
  );
}

export default CollectionCard;
