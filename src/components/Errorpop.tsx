import { toast } from "sonner"
interface Ierrorprop {
  message: string;
}

const ErrorPop = ({ message }: Ierrorprop) => {
  return (
    <>
      {toast.warning(message, {
         description: "",
         position: "top-center",
         richColors: true
      })}
    </>
  );
};

export default ErrorPop;
