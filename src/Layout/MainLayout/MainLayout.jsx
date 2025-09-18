import { Outlet, useLocation } from "react-router";
import Footer from "../../pages/Home/Footer/Footer";
import NavBer from "../../components/NavBer/NavBer";
import { useEffect, useState } from "react";

function MainLayout() {
  const { pathname } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {pathname === "/" ? (
        ""
      ) : (
        <div
          className={`fixed top-0 w-full z-30 transition-colors duration-300 ${
            isScrolled ? "bg-white shadow-sm" : "bg-transparent shadow-sm"
          }`}
        >
          <NavBer />
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
