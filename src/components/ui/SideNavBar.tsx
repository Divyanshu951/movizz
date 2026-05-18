import { Link, MessageCircle, Play } from "lucide-react";

type Props = {
  id: string;
};

export default function SideNavBar({ id }: Props) {
  return (
    <div className="fixed top-[50%] right-4 z-1001 flex translate-y-[-50%] flex-col items-center gap-1 rounded-md bg-black p-1">
      <a className="flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-[3px] bg-gray-700 px-2 py-1 text-gray-300 transition-colors duration-300 hover:text-gray-100">
        <MessageCircle size={18} />
        <span className="text-[8px]">Reviews</span>
      </a>
      <a className="flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-[3px] bg-gray-700 px-2 py-1 text-gray-300 transition-colors duration-300 hover:text-gray-100">
        <Play size={18} />
        <span className="text-[8px]">Trailer</span>
      </a>
      <a
        href={`https://www.imdb.com/title/${id}`}
        target="_blank"
        className="flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-[3px] bg-gray-700 px-2 py-1 text-gray-300 transition-colors duration-300 hover:text-gray-100"
      >
        <Link size={18} />
        <span className="text-[8px]">IMBD</span>
      </a>
    </div>
  );
}
