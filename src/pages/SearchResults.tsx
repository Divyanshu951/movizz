import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResult } from "../api/api";
import SearchResultCard from "../components/ui/SearchResultCard";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  if (!query) return <p>Use the Search bar to search for a movie or show</p>;

  return <SearchContent query={query} />;
}

function SearchContent({ query }: { query: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["searchResult", query],
    queryFn: () => fetchSearchResult(query),
  });

  console.log(data.results);

  return (
    <div className="grid grid-cols-5 place-items-center gap-2">
      {data.results.map((item) => (
        <SearchResultCard item={item} />
      ))}
    </div>
  );
}
