import Chart from "../components/Chart.jsx";
import InfoCard from "../components/InfoCard.jsx";
import DonutChart from "../components/DonutChart.jsx";

import Satisfaction from "../statics/icons/satisfaction.svg";
import Occupancy from "../statics/icons/occupancy.svg";
import Orders from "../statics/icons/orders.svg";
import Reservation from "../statics/icons/reservation.svg";

const Dashboard = () => {
  return (
    <div className="flex place-items-start ml-40 flex-col w-[60rem]">
      <section className="flex-start mt-10 ml-4">
        <h1 className="links text-2xl"> Hello Francois</h1>
        <h1 className="links text-lg">October 7th 2023</h1>
      </section>
      <section className="w-full mt-12 flex justify-evenly">
        <InfoCard
          label="Occupancy"
          num="13/25"
          image={Occupancy}
          style="w-8"
          bgColor="[#cebe78d4]"
        />
        <InfoCard
          label="Reservations"
          num="7"
          image={Reservation}
          style="w-8"
          bgColor="bg-[#3498db]"
        />
        <InfoCard
          label="Orders"
          num="78"
          image={Orders}
          style="w-6"
          bgColor="bg-[#1d401460]"
        />
        <InfoCard
          label="Guest Satisfaction"
          num="4.5"
          image={Satisfaction}
          style="w-8"
          bgColor="bg-[#008080]"
        />
      </section>
      <section className="pt-12 ml-4 flex">
        <Chart />
        <section className="mt-36">
          <DonutChart />
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
