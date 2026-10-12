import Logo from "./logo";
import Btn1 from "./Btn1";
import { NavigateHover } from "./navHover";
import { useAuth } from "@/Context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, loading } = useAuth();
  const [loggedIn, setLogedIn] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="w-11/12 rounded-xl px-5 py-5 flex justify-between bg-black ">
          <Logo name="Deakin@Dev" />
          <div className="bg-white rounded-xl min-w-2/6 flex items-center justify-center">
            <NavigateHover></NavigateHover>
          </div>
          {/* Search Bar */}
          <div className="flex gap-5">
            <Btn1 name="Post" link="/post" />
            {user && !loading ? (
              <Btn1 name="Logout" link="/logout" />
            ) : (
              <Btn1 name="Login" link="/login" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
