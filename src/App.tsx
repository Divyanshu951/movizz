import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout.tsx";
import SearchResults from "./pages/SearchResults.tsx";
import MovieDetailsCard from "./components/ui/MovieDetailsCard.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "search", element: <SearchResults /> },
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Home /> },
      { path: "movie/:movieId", element: <MovieDetailsCard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

/*
data fetching - tanstack 
react router for routing 
styling tailwind
framer motion for animation 
zod for runtime validation

s1 - navbar 
s2 search result page 
*/
