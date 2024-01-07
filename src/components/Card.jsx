function Card({ data }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-4 shadow-md shadow-indigo-100 bg-white hover:bg-indigo-100 transform transition duration-1000 hover:scale-105">
      <img
        alt={data.name}
        src={data.sprites.other.dream_world.front_default}
        className="w-32 h-32"
      />

      <h3 className="mt-2 font-semibold text-lg text-primary">{data.name}</h3>
    </div>
  );
}

export default Card;
