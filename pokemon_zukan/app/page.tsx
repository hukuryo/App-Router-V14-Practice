import React from "react";
import { Spinner } from "./components/spinner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Spinner />
    </main>
  );
}
