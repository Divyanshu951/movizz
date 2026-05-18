import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResultMovies } from "../api/api";
import SearchResultCard from "../components/ui/SearchResultCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (!query) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black p-10 font-sans text-gray-500">
        <p className="text-center text-2xl tracking-tight">
          Begin your journey. Use the search bar below to find movies and shows.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-black to-black" />

      <div className="absolute top-0 left-0 h-125 w-125 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-100 w-100 rounded-full bg-red-900/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="mb-14">
          <p className="mb-3 text-sm tracking-[0.3em] text-yellow-500/70 uppercase">
            Search Results
          </p>

          <h1 className="max-w-3xl text-5xl leading-tight font-black tracking-tight md:text-6xl">
            Explore results for{" "}
            <span className="text-[#F5C518]">"{query}"</span>
          </h1>

          <div className="mt-6 h-0.5 w-55 bg-linear-to-r from-[#F5C518] to-transparent" />
        </div>

        <SearchContent query={query} />
      </div>
    </div>
  );
}

function SearchContent({ query }: { query: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["searchResult", query],
    queryFn: () => fetchSearchResultMovies(query),
  });

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {data.results.map((item) => (
        <SearchResultCard key={item.id} item={item} />
      ))}
    </div>
  );
}
