import { StandardButtonProps } from "@/types/types";

export default function StandardButton({ text }: StandardButtonProps) {
  return (
    <button
      type="submit"
      className="self-center bg-[#005785] text-white text-base px-2.5 py-1.25 m-0 border-none rounded-[5px]
                        cursor-pointer scale-100 transition duration-200 ease-in-out 
                        hover:bg-[#007abc] hover:scale-110"
    >
      {text}
    </button>
  );
}
