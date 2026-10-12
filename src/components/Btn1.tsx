import { useNavigate } from "react-router-dom";

interface Btn1Props {
  name: string;
  link?: string;
}

const Btn1 = ({ name, link }: Btn1Props) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="max-h-fit max-w-fit min-w-24 bg-yellow-200 text-sm px-6 py-3 cursor-pointer rounded-xl text-black font-medium transition duration-75"
    >
      {name}
    </button>
  );
};

export default Btn1;