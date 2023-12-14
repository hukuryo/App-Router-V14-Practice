import Link from "next/link";
import React from "react";

type monstarType = {
  id: number;
  title: string;
};

async function fetchItem() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return await res.json();
}

export const SubItemList = async () => {
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
