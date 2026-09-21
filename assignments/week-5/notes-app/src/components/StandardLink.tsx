import { StandardLinkProps } from "@/types/types";
import Link from "next/link";

export default function StandardLink({ href, text }: StandardLinkProps) {
  return (
    <Link
      href={href}
      className="self-center bg-[#005785] text-white text-base px-2.5 py-1.25 m-0 border-none rounded-[5px]
                        cursor-pointer scale-100 transition duration-200 ease-in-out 
                        hover:bg-[#007abc] hover:scale-110"
    >
      {text}
    </Link>
  );
}
