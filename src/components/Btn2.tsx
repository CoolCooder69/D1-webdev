import { MoveRight } from "lucide-react";

interface Btn2Props {
  title: string;
}

const Btn2 = ({ title }: Btn2Props) => (
  <button className="flex gap-2 text-center bg-gray-300 px-5 py-2 text-black rounded-4xl cursor-pointer">
    {title}
    <MoveRight />
  </button>
);

export default Btn2;