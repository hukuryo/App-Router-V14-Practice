import Link from "next/link";
import React from "react";

type pageProps = {
  params: {
    id: number;
    title: string;
    monstar_id: number;
  };
};

async function fetchItemDetail(monstarId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${monstarId}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default function MonsterDetailPage({ params }: pageProps) {
  const monstar = fetchItemDetail(params.monstar_id);
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-6">{monstar.title}</div>
        <div className="flex justify-center">
          <Link href={"/monsterList"}>リストに戻る</Link>
        </div>
      </div>
    </div>
  );
}
