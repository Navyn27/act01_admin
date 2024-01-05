import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const OrderReport = () => {
  // Row Data: The data to be displayed.
  const current =
    "border-2 rounded-2xl flex place-items-center justify-center h-1/2 w-32 border-[#1d4014]";
  const notCurrent =
    "border-2 rounded-2xl flex place-items-center justify-center h-1/2 w-32 border-[#cbcbcb]";
  const [status, setStatus] = useState("Pending");

  const [searchInput, setSearchInput] = useState("");
  const [searchOption, setSearchOption] = useState("");

  const [rowData, setRowData] = useState([
    {
      No: 1,
      Fname: "John",
      Lname: "Doe",
      Time: "2023-12-05, 15:23",
      Item: "Main Hall",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      Status: "Cancelled",
    },
    {
      No: 2,
      Fname: "Jane",
      Lname: "Smith",
      Time: "2023-12-10, 18:45",
      Item: "Wedding Grounds",
      Phone: "07851234987",
      Email_Addr: "jane.smith@email.com",
      Status: "Cancelled",
    },
    {
      No: 3,
      Fname: "Mike",
      Lname: "Johnson",
      Time: "2023-12-15, 12:30",
      Item: "Room",
      Phone: "07123456789",
      Email_Addr: "mike.johnson@company.com",
      Status: "Pending",
    },
    {
      No: 4,
      Fname: "Emily",
      Lname: "Clark",
      Time: "2023-12-20, 09:15",
      Item: "Room",
      Phone: "07987654321",
      Email_Addr: "emily.clark@gmail.com",
      Status: "Pending",
    },
    {
      No: 5,
      Fname: "David",
      Lname: "Williams",
      Time: "2023-12-25, 20:00",
      Item: "Party Hall",
      Phone: "07654321987",
      Email_Addr: "david.williams@example.com",
      Status: "Cancelled",
    },
    {
      No: 6,
      Fname: "Sophie",
      Lname: "Anderson",
      Time: "2023-12-08, 14:00",
      Item: "Book Club Meeting",
      Phone: "07451234567",
      Email_Addr: "sophie.anderson@email.com",
      Status: "Pending",
    },
    {
      No: 7,
      Fname: "Robert",
      Lname: "Turner",
      Time: "2023-12-12, 09:45",
      Item: "Wedding Ground",
      Phone: "07893456789",
      Email_Addr: "robert.turner@example.com",
      Status: "Resolved",
    },
    {
      No: 8,
      Fname: "Olivia",
      Lname: "Baker",
      Time: "2023-12-18, 16:30",
      Item: "Wedding Ground",
      Phone: "07234567890",
      Email_Addr: "olivia.baker@company.net",
      Status: "Pending",
    },
    {
      No: 9,
      Fname: "Daniel",
      Lname: "Miller",
      Time: "2023-12-22, 11:15",
      Item: "Family Reunion",
      Phone: "07987654321",
      Email_Addr: "daniel.miller@example.com",
      Status: "Resolved",
    },
    {
      No: 10,
      Fname: "Grace",
      Lname: "Harrison",
      Time: "2023-12-28, 19:00",
      Item: "Dinner Reservation",
      Phone: "07123456789",
      Email_Addr: "grace.harrison@email.com",
      Status: "Pending",
    },
    {
      No: 11,
      Fname: "Nathan",
      Lname: "Coleman",
      Time: "2023-12-30, 10:30",
      Item: "Hall - BD Party",
      Phone: "07651234567",
      Email_Addr: "nathan.coleman@example.com",
      Status: "Resolved",
    },
    {
      No: 12,
      Fname: "Isabel",
      Lname: "Garcia",
      Time: "2024-01-02, 13:45",
      Item: "Wedding Ground",
      Phone: "07897654321",
      Email_Addr: "isabel.garcia@email.com",
      Status: "Cancelled",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Fname" },
    { field: "Lname" },
    { field: "Time" },
    { field: "EndTime" },
    { field: "Item" },
    { field: "Phone" },
    { field: "Email_Addr" },
    { field: "Status" },
  ]);

  const getRowStyle = (params) => {
    return {
      "border-radius": "5px",
    };
  };

  const filterByStatus = (status) => {
    const filteredRows = rowData.filter((row) => row.Status === status);
    return filteredRows;
  };

  const filterData = (filterType, filterValue) => {
    switch (filterType) {
      case "Fname":
        setDisplayData(displayData.filter((row) => row.Fname === filterValue));
        break;
      case "Lname":
        setDisplayData(displayData.filter((row) => row.Lname === filterValue));
        break;
      case "Phone":
        setDisplayData(displayData.filter((row) => row.Phone === filterValue));
        break;
      case "Email":
        setDisplayData(
          displayData.filter((row) => row.Email_Addr === filterValue)
        );
        break;
      default:
        break;
    }
  };

  const updateTable = (status) => {
    setDisplayData(filterByStatus(status));
  };

  const [displayData, setDisplayData] = useState(filterByStatus(status));

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-alpine h-[550px] w-[1100px]"}>
      <div className="flex justify-evenly h-16 place-items-center ">
        <div
          className={status == "Pending" ? current : notCurrent}
          onClick={() => {
            setStatus("Pending");
            updateTable("Pending");
          }}
        >
          <h1>Pending</h1>
        </div>
        <div
          className={status == "Resolved" ? current : notCurrent}
          onClick={() => {
            setStatus("Resolved");
            updateTable("Resolved");
          }}
        >
          <h1>Resolved</h1>
        </div>
        <div
          className={status == "Cancelled" ? current : notCurrent}
          onClick={() => {
            setStatus("Cancelled");
            updateTable("Cancelled");
          }}
        >
          <h1>Cancelled</h1>
        </div>
      </div>
      <div className="outline-none pl-2 flex justify-evenly h-16 place-items-center ">
        <input
          className="pl-4 pr-4 bg-[#00000000] outline-none border-b-2 flex place-items-center justify-center h-1/2 border-[#1d4014] w-56"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Input"
        />
        <select
          id="searchBy"
          name="searchBy"
          className="bg-none ml-[-130px] outline-none border-2 rounded-2xl flex place-items-center justify-center h-1/2 w-32 border-[#1d4014]"
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value=""></option>
          <option value="Fname">First Name</option>
          <option value="Lname">Last Name</option>
          <option value="Phone">Phone Number</option>
          <option value="Email">Email Address</option>
        </select>
        <div
          className="bg-none outline-none border-2 rounded-2xl flex place-items-center justify-center h-1/2 w-32 border-[#1d4014] bg-[#1d4014]"
          onClick={() => {
            if (searchInput && searchOption) {
              filterData(searchOption, searchInput);
              console.log(searchInput, searchOption);
            } else {
              window.alert("Null values found");
            }
          }}
        >
          <h1 className="text-white font-semibold">Search</h1>
        </div>
      </div>
      <AgGridReact
        rowData={displayData}
        columnDefs={colDefs}
        getRowStyle={getRowStyle}
        gridOptions={{
          domLayout: "autoHeight",
        }}
      />
    </div>
  );
};

export default OrderReport;
