import NavBar from "../components/NavBar";

type Props = {};

export default function AppLayout({}: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <NavBar />
    </div>
  );
}
