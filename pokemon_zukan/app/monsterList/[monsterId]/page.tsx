import Link from "next/link";
import React from "react";

type detailType = {
  params: string;
};

type pageProps = {
  params: {
    id: number;
    title: string;
    body: string;
  };
};

async function fetchItemDetail(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const monsterDetail: pageProps = res.json();
  return res.json();
}

export default function MonsterDetailPage({ params }: detailType) {
  // const monster = fetchItemDetail(params);
  // console.log(monster);
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* <div className="text-center mb-6">{monster}</div> */}
        <div className="flex justify-center">
          <Link href={"/monsterList"}>リストに戻る</Link>
        </div>
      </div>
    </div>
  );
}
