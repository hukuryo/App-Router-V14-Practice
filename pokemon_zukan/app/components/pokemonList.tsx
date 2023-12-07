import Link from "next/link";
import { resolve } from "path";
import React from "react";

type placeholder = {
  id: number;
  title: string;
};

async function getItem() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export const PokemonList = async () => {
  const items = await getItem();
  return (
    <div>
      <ul>
        {items.map((item: placeholder) => (
          <li key={item.id}>
            <Link href={`monsterList/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
