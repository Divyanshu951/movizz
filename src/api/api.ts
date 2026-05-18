// import { MovieDetailsSchema } from "../schema/MovieDetailsSchema";
// import { SearchResultSchema } from "../schema/SearchResultScheme";

const token = import.meta.env.VITE_TMDB_TOKEN;

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export async function fetchSearchResult(
  query: string,
  type: string,
  page: number,
) {
  const res = await fetch(
    `${BASE_URL}/search/${type}?query=${encodeURIComponent(
      query,
    )}&include_adult=true&language=en-US&page=${page}`,
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await res.json();
  return data;
  // return SearchResultSchema.parse(data);
}

export async function fetchMovieDetails(id: string, type: string) {
  const res = await fetch(`${BASE_URL}/${type}/${id}`, options);

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await res.json();
  return data;
  // return MovieDetailsSchema.parse(data);
}

export async function fetchTrending(type: string) {
  const res = await fetch(
    `${BASE_URL}/trending/${type}/day?language=en-US`,
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await res.json();
  return data;
  // return MovieDetailsSchema.parse(data);
}
