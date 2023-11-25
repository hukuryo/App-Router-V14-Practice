import React from "react";

export default function monsterList() {
  const pokemonList = [
    // ここにポケモンのデータが入る想定
    { id: 1, name: "ピカチュウ" },
    { id: 2, name: "ゼニガメ" },
    // 他のポケモンデータも追加
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">モンスター一覧画面</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold mb-2">{pokemon.name}</h2>
            {/* 他のポケモン情報を表示 */}
          </div>
        ))}
      </div>
    </div>
  );
}
