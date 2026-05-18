import { useNavigate } from "react-router-dom";

export default function SearchResultCard({ item }) {
  const { poster_path, title, release_date, id } = item;

  const navigate = useNavigate();

  function handleSelection() {
    navigate(`/movie/${id}`);
  }

  return (
    <div
      className="flex h-65 w-35 flex-col border border-red-700"
      onClick={handleSelection}
    >
      <img
        className=""
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <div className="flex">
        <h1>{title}</h1>
        <p>{release_date}</p>
      </div>
    </div>
  );
}
