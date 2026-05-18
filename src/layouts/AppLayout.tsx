import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="text-foreground min-h-screen">
      <div className="">
        <button
          disabled={pathname === "/home"}
          onClick={() => navigate(-1)}
          className={
            "fixed top-3 left-3 z-1001 cursor-pointer rounded-full border border-white/30 px-6 py-1 text-sm tracking-widest text-white uppercase backdrop-blur-md transition hover:bg-white/30 hover:text-black disabled:cursor-not-allowed"
          }
        >
          ←
        </button>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// [background:radial-gradient(125%_100%_at_50%_0%,#1E293B_0%,#020617_60%)_#020617]
