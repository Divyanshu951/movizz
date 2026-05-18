import z from "zod";

export const SearchItemSchemaMovie = z.object({
  adult: z.boolean(),
  id: z.number(),
  backdrop_path: z.string().nullable(),
  poster_path: z.string().nullable(),
  overview: z.string(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  vote_average: z.number(),
  vote_count: z.number(),
  video: z.boolean(),
  title: z.string(),
  original_title: z.string(),
  release_date: z.string(),
  softcore: z.boolean().optional(),
});

export const SearchResultSchema = z.object({
  page: z.number(),
  results: z.array(SearchItemSchemaMovie),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SearchItem = z.infer<typeof SearchItemSchemaMovie>;
export type SearchResult = z.infer<typeof SearchResultSchema>;
