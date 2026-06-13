import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchTrending } from "../api/api";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [trendingType, setTrendingType] = useState<string>("movie");

  // State to hold the clicked item during the transition
  const [expandingItem, setExpandingItem] = useState<any | null>(null);

  const { data } = useSuspenseQuery({
    queryKey: [trendingType],
    queryFn: () => fetchTrending(trendingType),
  });

  const navigate = useNavigate();

  const handleTileClick = (item: any) => {
    // Prevent multiple clicks while already animating
    if (expandingItem) return;

    // 1. Trigger the expansion animation
    setExpandingItem(item);

    // 2. Wait for the exact duration of the animation (700ms), then navigate
    setTimeout(() => {
      navigate(`/movie/${item.id}?type=${trendingType}`);
    }, 700);
  };

  // Framer Motion variants for the staggered load effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each tile's entrance slightly
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "linear", stiffness: 200, damping: 20 },
    },
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#050505] font-sans text-white selection:bg-yellow-500 selection:text-black">
      {/* Background Text */}
      <div className="fixed top-15 left-15 size-32">{/* <MovizzLogo /> */}</div>
      <div className="pointer-events-none absolute bottom-[-8%] left-0 z-0 w-full text-center text-[28vw] leading-none font-bold tracking-tighter text-[#151515] uppercase select-none">
        {trendingType === "movie" ? "movies" : "series"}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-12 left-1/2 z-30 flex -translate-x-1/2 items-center gap-8 text-[16px] font-semibold tracking-widest uppercase">
        <div className="absolute top-7 right-1/2 z-0 w-full translate-1/2 text-center text-3xl leading-none font-bold tracking-tighter text-gray-600 uppercase">
          Trending
        </div>
        <button
          onClick={() => setTrendingType("movie")}
          className={cn(
            "border-b-2 pb-1 transition-all duration-300",
            trendingType == "movie"
              ? "border-[#f5c518] text-white"
              : "border-transparent text-gray-600 hover:text-gray-300",
          )}
        >
          Movies
        </button>

        <button
          onClick={() => setTrendingType("tv")}
          className={cn(
            "border-b-2 pb-1 transition-all duration-300",
            trendingType == "tv"
              ? "border-[#f5c518] text-white"
              : "border-transparent text-gray-600 hover:text-gray-300",
          )}
        >
          TV Shows
        </button>
      </div>

      {/* Carousel Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        // key forces the load animation to replay when switching Movies <-> TV
        key={trendingType}
        className="z-10 flex h-screen w-full scrollbar-none items-center justify-start gap-4 overflow-x-auto px-10 py-10 [-ms-overflow-style:none] md:justify-center [&::-webkit-scrollbar]:hidden"
      >
        {data.results.slice(0, 7).map((item: any) => (
          <motion.div
            variants={itemVariants}
            // layoutId maps this small tile to the giant overlay on click
            layoutId={`poster-${item.id}`}
            onClick={() => handleTileClick(item)}
            key={item.id}
            className={cn(
              "group relative h-[50vh] w-20 shrink-0 cursor-pointer overflow-hidden bg-gray-900 transition-all duration-500 md:h-[65vh] md:w-40",
              // Only apply hover effects if no animation is currently happening
              !expandingItem &&
                "hover:z-20 hover:w-60 hover:scale-120 hover:shadow-2xl hover:shadow-black/50",
            )}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 from-black/80 from-25% via-black/60 via-30% to-transparent to-100% group-hover:bg-linear-to-t"></div>
            <div className="absolute bottom-0 left-[50%] flex w-full max-w-45 translate-x-[-50%] flex-col items-center gap-1.5 py-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="text-center text-2xl font-semibold">
                {trendingType === "movie" ? item.title : item.name}
              </p>
              <div className="text-md flex items-center justify-center gap-2 rounded-full bg-[#F5C518]/80 px-2 py-1 text-black">
                <span className="text-md font-semibold">IMDB</span>
                <span className="text-sm">{item.vote_average.toFixed(1)}</span>
              </div>
              <p>
                {trendingType === "movie"
                  ? item.release_date.split("-")[0]
                  : item.first_air_date.split("-")[0]}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- PRE-NAVIGATION EXPANSION OVERLAY --- */}
      <AnimatePresence>
        {expandingItem && (
          <motion.div
            layoutId={`poster-${expandingItem.id}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              layout: {
                duration: 0.9,
                ease: "linear",
              },
              opacity: {
                duration: 0.9,
                ease: "linear",
              },
            }}
            className="fixed inset-0 z-[100] overflow-hidden bg-black"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${
                expandingItem.backdrop_path || expandingItem.poster_path
              }`}
              alt={expandingItem.title || expandingItem.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
