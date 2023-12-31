import { Suspense } from "react";
import { PokemonList } from "../components/pokemonList";
import Loading from "../loading";
import { SubItemList } from "../components/subItemList";

const MonsterList = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">モンスター一覧画面</h1>
      <div className="flex justify-around">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Suspense fallback={<Loading />}>
            <PokemonList />
          </Suspense>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Suspense fallback={<Loading />}>
            <SubItemList />
          </Suspense>
        </div>
      </div>

    </div>
  );
};

export default MonsterList;
