import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

function PokemonCollection() {
  const { collectionItems } = useSelector((state) => state.collection);

  return (
    <section className="px-4 md:px-8 pt-4 pb-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {collectionItems.map((item) => (
          <CollectionCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}

export default PokemonCollection;
