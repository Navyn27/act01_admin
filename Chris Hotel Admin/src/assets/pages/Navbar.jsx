import Logo from "../statics/logos/logo.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
            ? "bg-[#cebe78d4] grid justify-items-center h-12 w-36 rounded-full"
            : "bg-white grid justify-items-center h-12 w-36 rounded-full"
        }
        to="/dashboard"
      >
        <h1 className="links text-lg">Dashboard</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("orders");
        }}
        className={
          currentTab == "orders"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/orders"
      >
        <h1 className="links text-lg">Orders</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("reviews");
        }}
        className={
          currentTab == "reviews"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/reviews"
      >
        <h1 className="links text-lg">Reviews</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("reservations");
        }}
        className={
          currentTab == "reservations"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/reservations"
      >
        <h1 className="links text-lg">Reservations</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("activity");
        }}
        className={
          currentTab == "activity"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/activity"
      >
        <h1 className="links text-lg">Activity Log</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("invoices");
        }}
        className={
          currentTab == "invoices"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/invoices"
      >
        <h1 className="links text-lg">Invoices</h1>
      </Link>
      <Link
        onClick={() => {
          toggleTab("admins");
        }}
        className={
          currentTab == "admins"
            ? "bg-[#cebe78d4] grid place-items-center h-12 w-36 rounded-full"
            : "bg-white grid place-items-center h-12 w-36 rounded-full"
        }
        to="/admins"
      >
        <h1 className="links text-lg">Admin Acc.</h1>
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
