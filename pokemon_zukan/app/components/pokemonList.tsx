import React from "react";

type placeholder = {
  id: number;
  title: string;
};

async function getItem() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
export const PokemonList = async () => {
  const items = await getItem();
  return (
    <div>
      <ul>
        {items.map((item: placeholder) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
