import { Bookmark, Search, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();
  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search?q=${query}`);
    setQuery("");
  }

  return (
    <div className="fixed bottom-6 left-[50%] z-1001 flex w-150 translate-x-[-50%] items-center gap-1 rounded-md bg-black p-1">
      <div className="flex h-10 items-center justify-center rounded-[3px] bg-[#F5C518] px-3 text-2xl font-bold text-black">
        Movizz
      </div>
      <div className="flex h-10 grow items-center gap-2 rounded-[3px] bg-gray-700">
        {/* <a href="#" className="text-sm">
          Home
        </a>
        <a href="#" className="">
          Favorites
        </a> */}
      </div>
      <button className="flex h-10 min-w-10 cursor-pointer flex-col items-center justify-between rounded-[3px] bg-gray-700 px-2 py-1 text-gray-300 transition-colors duration-300 hover:text-gray-100">
        <Bookmark size={18} />
        <span className="text-[8px]">Saved</span>
      </button>
      <button className="flex h-10 min-w-10 cursor-pointer flex-col items-center justify-between rounded-[3px] bg-gray-700 px-2 py-1 text-gray-300 transition-colors duration-300 hover:text-gray-100">
        <SearchIcon size={18} />
        <span className="text-[8px]">Search</span>
      </button>
      {/* <form onSubmit={(e) => handleSubmit(e)} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-amber-300"
        />
        <button className="p-2">
          <Search />
        </button>
      </form> */}
    </div>
  );
}
