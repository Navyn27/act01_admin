import "./App.css";
import Dashboard from "./assets/pages/Dashboard";
import Navbar from "./assets/pages/Navbar";
import Reviews from "./assets/pages/Reviews";
import Orders from "./assets/pages/Orders";
import Reservations from "./assets/pages/Reservations";
import Invoices from "./assets/pages/Invoices";
import ActivityLog from "./assets/pages/Activity_log";
import AdminAcc from "./assets/pages/AdminAcc";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

const App = () => {
  const appBody = useRef(null);
  return (
    <div className="ml-0 grid grid-cols-2">
      <BrowserRouter>
        <div className="fixed">
          <Navbar />
        </div>
        <div ref={appBody} className="ml-36 w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/bookings" element={<Reservations />} />
            <Route path="/activity" element={<ActivityLog />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/admins" element={<AdminAcc />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
