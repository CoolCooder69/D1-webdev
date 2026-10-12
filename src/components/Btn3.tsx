import { Loader2 } from "lucide-react";

interface IBtn3props {
    title: string, 
    url: string, 
    onClick: ()=> void, 
    load: boolean,
}

const Btn3 = ({title, url, onClick, load}: IBtn3props)=> {
    return <>
        <button onClick={onClick} className="px-5 py-2 text-white rounded-4xl bg-black transition-all hover:scale-110">
            {load ? <Loader2 className="animate-spin" /> : title}
        </button>
    </>
}

export default Btn3; 