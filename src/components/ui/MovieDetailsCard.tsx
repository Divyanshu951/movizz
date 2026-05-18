import { useParams } from "react-router-dom";
import SideNavBar from "./SideNavBar";

const movie = {
  adult: false,
  backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
  belongs_to_collection: {
    id: 726871,
    name: "Dune Collection",
    poster_path: "/lxIGYkpvYjLtYtZH684AQft0FhD.jpg",
    backdrop_path: "/fahk0Fu7VUUfK6IkTt1R3waOD9F.jpg",
  },
  budget: 190000000,
  genres: [
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 12,
      name: "Adventure",
    },
  ],
  homepage: "https://www.warnerbros.com/movies/dune-part-two",
  id: 693134,
  imdb_id: "tt15239678",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Dune: Part Two",
  overview:
    "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
  popularity: 26.3622,
  poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  production_companies: [
    {
      id: 923,
      logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
      name: "Legendary Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2024-02-27",
  revenue: 714844358,
  runtime: 167,
  softcore: false,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Long live the fighters.",
  title: "Dune: Part Two",
  video: false,
  vote_average: 8.127,
  vote_count: 7915,
};

const details = {};

export default function MovieDetailsCard() {
  const searchParams = useParams();
  console.log(searchParams.movieId);

  const {
    backdrop_path,
    title,
    overview,
    poster_path,
    origin_country,
    production_companies,
    release_date,
    runtime,
    adult,
    imdb_id,
    tagline,
  } = movie;

  return (
    <div className="bg-red-100">
      <SideNavBar id={imdb_id} />
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
        className="relative h-screen w-screen"
      />

      {/* ========================================== */}
      {/* ADDED CODE: The Overlays (Crucial)         */}
      {/* ========================================== */}
      {/* EXPLANATION:
        I placed these absolute divs between the image and the content grid. 
        They stretch over the whole screen (`inset-0`) and create a dark, 
        semi-transparent fade from the edges inward using Tailwind gradients.
        
        Because they sit behind your text container, they act like a shadow 
        (a "scrim") on the image. This guarantees your white text will always 
        have enough contrast to be readable, no matter how bright the movie 
        backdrop is. `pointer-events-none` is added so they don't block any 
        mouse clicks on your background.
      */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-l from-black/80 via-transparent to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30"></div>
      {/* ========================================== */}
      {/* END OF ADDED CODE                          */}
      {/* ========================================== */}

      <div className="absolute inset-0 grid h-screen w-screen grid-cols-2 p-10">
        <h1 className="max-w-[80%] text-8xl font-semibold text-shadow-2xs">
          {title.split(":").map((ttl, i, arr) => (
            <span key={i}>
              {ttl.trim()}
              {i < arr.length - 1 && ":"}
              <br />
            </span>
          ))}
        </h1>
        <p className="text-md max-w-[60%] justify-self-end text-shadow-2xs">
          {overview}
        </p>
        <div className="flex flex-col gap-4 self-end text-white">
          <div className="flex items-center gap-3">
            <p className="min-w-17.5 text-lg">Country:</p>
            {origin_country.map((country) => (
              <span className="rounded-full border border-white/80 px-5 py-2 text-sm backdrop-blur-sm">
                {country}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <p className="min-w-17.5 text-lg">Studio:</p>

            <span className="rounded-full border border-white/80 px-5 py-2 text-sm backdrop-blur-sm">
              {production_companies[0].name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p className="min-w-17.5 text-lg">Time:</p>

            <span className="rounded-full border border-white/80 px-5 py-2 text-sm backdrop-blur-sm">
              {Math.floor(runtime / 60)} hr {runtime % 60} Min
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p className="min-w-17.5 text-lg">Date:</p>
            <span className="rounded-full border border-white/80 px-5 py-2 text-sm backdrop-blur-sm">
              {release_date}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <p className="min-w-17.5 text-lg">Adult:</p>
            <span className="rounded-full border border-white/80 px-5 py-2 text-sm backdrop-blur-sm">
              {adult ? "Yes" : "No"}
            </span>
          </div>
        </div>
        <div className="self-end justify-self-end rounded-md bg-black p-1">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
            className="h-85 rounded-sm transition-all duration-300 hover:mr-10 hover:h-150"
          />
        </div>
      </div>
      <p className="font-inter absolute bottom-40 left-[50%] translate-x-[-50%] text-6xl font-semibold">
        "{tagline}"
      </p>
    </div>
  );
}
