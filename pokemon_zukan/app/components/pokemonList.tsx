import Link from "next/link";
import React from "react";

type monstarType = {
  id: number;
  title: string;
};

async function fetchItem() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export const PokemonList = async () => {
  const items = await fetchItem();
  return (
    <div>
      <ul>
        {items.map((item: monstarType) => (
          <li key={item.id}>
            <Link href={`monsterList/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
