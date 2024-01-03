import Logo from "../statics/logos/logo.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// import reviewsImg from "../statics/icons/"
// import adminsImg
import Dashboard from "../statics/icons/dashboard.svg";
import Reviews from "../statics/icons/reviews.svg";
import Orders from "../statics/icons/orders.svg";
import Activity from "../statics/icons/activity-log.svg";
import Admins from "../statics/icons/admins.svg";
import Invoices from "../statics/icons/invoices.svg";
import Bookings from "../statics/icons/bookings.svg";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("");
  const { pathname } = useLocation();

  const toggleTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    toggleTab(pathname.substring(1));
  }, [pathname]);

  return (
    <section className="bg-white rounded-r-2xl h-screen w-56 grid grid-cols-1 justify-items-center pt-6 pr-3 pl-3">
      {/* The logo */}
      <img src={Logo} className="w-36 mb-10" alt="Chris Hotel Logo" />
      {/* Navigation hyperlinks */}
      <Link
        onClick={() => {
          toggleTab("dashboard");
        }}
        className={
          currentTab == "dashboard" || currentTab == ""
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/dashboard"
      >
        <img src={Dashboard} className="w-6 ml-[-25px]" alt="" />
        <h1 className="links ml-[-45px] text-base">Dashboard</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("activity");
        }}
        className={
          currentTab == "activity"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/activity"
      >
        <img src={Activity} className="w-6 ml-[-25px]" alt="" />
        <h1 className="links ml-[-45px] text-base">Activity</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("orders");
        }}
        className={
          currentTab == "orders"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/orders"
      >
        <img src={Orders} className="w-6 ml-[-25px]" alt="Dashboard" />
        <h1 className="links ml-[-45px] text-base">Orders</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("reservations");
        }}
        className={
          currentTab == "bookings"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/bookings"
      >
        <img src={Bookings} className="w-6 ml-[-25px]" alt="Dashboard" />
        <h1 className="links ml-[-45px] text-base">Bookings</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("invoices");
        }}
        className={
          currentTab == "invoices"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/invoices"
      >
        <img src={Invoices} className="w-6 ml-[-25px]" alt="Invoices" />
        <h1 className="links ml-[-45px] text-base">Invoices</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("reviews");
        }}
        className={
          currentTab == "reviews"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/reviews"
      >
        <img src={Reviews} className="w-6 ml-[-25px]" alt="" />
        <h1 className="links ml-[-45px] text-base">Reviews</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("admins");
        }}
        className={
          currentTab == "admins"
            ? " bg-[#cebe78d4] grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
            : " bg-white grid grid-cols-2 place-items-center h-12 w-36 rounded-full"
        }
        to="/admins"
      >
        <img src={Admins} className="w-6 ml-[-25px]" alt="" />
        <h1 className="links ml-[-45px] text-base">Admins</h1>
      </Link>
      <div className="flex flex-col justify-around h-52"></div>
    </section>
  );
};

export default Navbar;

{
  /* <h1
            className={
              currentTab == "home" || currentTab == ""
                ? "border-solid border-white border-b-2 links text-base"
                : "links text-base slate-400"
            }
          > */
}
