import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResult } from "../api/api";
import SearchResultCard from "../components/ui/SearchResultCard";
import { Suspense, useState } from "react";
import MovizzLogo from "../components/svgs/MovizzLogo";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");
  const type = searchParams.get("type");

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
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-black to-black" />

      <div className="pointer-events-none fixed bottom-[-8%] left-0 z-0 w-full text-center text-[28vw] leading-none font-bold tracking-tighter text-[#151515] uppercase select-none">
        {type === "movie" ? "movies" : "series"}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="mb-14">
          <p className="mb-3 text-sm tracking-[0.3em] text-yellow-500/70 uppercase">
            Search Results
          </p>

          <h1 className="max-w-3xl text-5xl leading-tight font-black tracking-tight md:text-6xl">
            Explore results for{" "}
            <span className="text-[#F5C518]">"{query}"</span> in {type}'s
          </h1>

          <div className="mt-6 h-0.5 w-55 bg-linear-to-r from-[#F5C518] to-transparent" />
        </div>

        <Suspense fallback={<SearchSkeleton />}>
          <SearchContent query={query} type={type!} />
        </Suspense>
      </div>
    </div>
  );
}

function SearchContent({ query, type }: { query: string; type: string }) {
  const [page, setPage] = useState(1);

  const { data, isFetching } = useSuspenseQuery({
    queryKey: ["searchResult", query, type, page],
    queryFn: () => fetchSearchResult(query, type, page),
  });

  if (data.results.length === 0) {
    return <p className="text-center text-4xl">No result found!</p>;
  }

  return (
    <div className="relative">
      <div className="fixed top-15 left-15 size-32">
        <MovizzLogo />
      </div>
      <div className="fixed top-1/2 right-6 z-50 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            -
          </button>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">{page}</span>

            <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
              / {data.total_pages}
            </span>
          </div>

          <button
            onClick={() =>
              setPage((prev) => Math.min(prev + 1, data.total_pages))
            }
            disabled={page === data.total_pages}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            +
          </button>
        </div>
      </div>

      <div
        className={`grid grid-cols-2 gap-6 transition-opacity duration-300 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 ${
          isFetching ? "opacity-70" : "opacity-100"
        }`}
      >
        {data.results.map((item) => (
          <SearchResultCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function SearchSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-white/5 bg-white/5"
        >
          <div className="aspect-2/3 animate-pulse bg-white/10" />

          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded-full bg-white/10" />

            <div className="h-4 w-1/2 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}
