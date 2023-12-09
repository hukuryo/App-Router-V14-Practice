import React from "react";
import { Spinner } from "./components/spinner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ホーム画面</h1>
      <Link href="/monsterList" legacyBehavior>
        <a className="cursor-pointer">モンスター一覧画面へ</a>
      </Link>
    </main>
  );
}
