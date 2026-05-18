import { Search } from "lucide-react";
import React, { useState } from "react";

export default function NavBar() {
  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setQuery("");
  }

  return (
    <div className="flex items-center justify-between border border-red-400 px-20 py-2">
      <div className="text-3xl font-bold">Movizz</div>
      <div className="flex items-center gap-2">
        <a href="#" className="text-sm">
          Home
        </a>
        <a href="#" className="">
          Favorites
        </a>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-amber-300"
        />
        <button className="p-2">
          <Search />
        </button>
      </form>
    </div>
  );
}
