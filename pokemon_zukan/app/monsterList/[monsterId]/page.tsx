import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type detailType = {
  params: {
    monsterId: number
  }
};

type pageProps = {
  id: number;
  title: string;
  body: string;
};

async function fetchItemDetail(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  const monsterDetail: pageProps = await res.json();
  return monsterDetail
}

export default async function page({ params }: detailType) {
  const monster = await fetchItemDetail(params.monsterId)
  if(!monster) return notFound()
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="font-bold text-center mb-2">Title</h2>
        <div className="text-center mb-6">{monster.title}</div>
        <h2 className="font-bold text-center mb-2">body</h2>
        <div className="text-center mb-6">{monster.body}</div>
        <div className="flex justify-center">
          <Link href={"/monsterList"} className="hover:underline">リストに戻る</Link>
        </div>
      </div>
    </div>
  );
}
