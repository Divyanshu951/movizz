import z from "zod";

export const SearchItemSchema = z.object({
  id: z.number(),

  media_type: z.enum(["movie", "tv", "person"]),

  adult: z.boolean().optional(),

  backdrop_path: z.string().nullable().optional(),
  poster_path: z.string().nullable().optional(),
  profile_path: z.string().nullable().optional(),

  overview: z.string().optional(),

  original_language: z.string().optional(),

  genre_ids: z.array(z.number()).optional(),

  popularity: z.number().optional(),

  vote_average: z.number().optional(),
  vote_count: z.number().optional(),

  video: z.boolean().optional(),

  // movie
  title: z.string().optional(),
  original_title: z.string().optional(),
  release_date: z.string().optional(),

  // tv
  name: z.string().optional(),
  original_name: z.string().optional(),
  first_air_date: z.string().optional(),

  // person
  known_for_department: z.string().optional(),

  known_for: z
    .array(
      z.object({
        id: z.number(),
        media_type: z.enum(["movie", "tv"]),
        title: z.string().optional(),
        name: z.string().optional(),
        poster_path: z.string().nullable().optional(),
      }),
    )
    .optional(),
});

export const SearchResultSchema = z.object({
  page: z.number(),
  results: z.array(SearchItemSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type SearchItem = z.infer<typeof SearchItemSchema>;
export type SearchResult = z.infer<typeof SearchResultSchema>;
