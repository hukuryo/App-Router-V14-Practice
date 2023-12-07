import React from "react";

export default function MonsterDetailPage() {
  // 仮のモンスターデータ
  const monsterData = {
    name: "ピカチュウ",
    image: "pikachu.jpg", // 画像のパスやURL
    description: "かわいいポケモン、ピカチュウの説明文。",
    // 他にもモンスターに関するデータを追加
  };

  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <img
            src={monsterData.image}
            alt={monsterData.name}
            className="mx-auto w-40 h-40 object-cover rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{monsterData.name}</h1>
        <p className="text-gray-600 mb-6">{monsterData.description}</p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            他のページへ
          </button>
        </div>
      </div>
    </div>
  );
}
