const token = import.meta.env.VITE_TMDB_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export async function fetchSearchResult(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(
      query,
    )}&include_adult=true&language=en-US&page=1`,
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await res.json();

  // return SearchResultSchema.parse(data);
  return data;
}
