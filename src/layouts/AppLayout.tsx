import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return (
    <div className="text-foreground min-h-screen">
      <div className="">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// [background:radial-gradient(125%_100%_at_50%_0%,#1E293B_0%,#020617_60%)_#020617]
