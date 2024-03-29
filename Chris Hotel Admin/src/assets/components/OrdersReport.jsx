import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const OrderReport = () => {
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
      LName: "Doe",
      Time: "2023-12-05, 15:23",
      Item: "Birthday Cake",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      Status: "Pending",
    },
    {
      No: 2,
      Fname: "Jane",
      LName: "Smith",
      Time: "2023-12-10, 10:45",
      Item: "Anniversary Flowers",
      Phone: "07845678901",
      Email_Addr: "jane@example.com",
      Status: "Pending",
    },
    {
      No: 3,
      Fname: "Michael",
      LName: "Johnson",
      Time: "2023-12-15, 12:30",
      Item: "Chocolate Box",
      Phone: "07123456789",
      Email_Addr: "michael@example.com",
      Status: "Resolved",
    },
    {
      No: 4,
      Fname: "Emily",
      LName: "Davis",
      Time: "2023-12-20, 18:15",
      Item: "Holiday Cookies",
      Phone: "07987654321",
      Email_Addr: "emily@example.com",
      Status: "Resolved",
    },
    {
      No: 5,
      Fname: "Chris",
      LName: "Brown",
      Time: "2023-12-25, 08:00",
      Item: "Christmas Hamper",
      Phone: "07654321098",
      Email_Addr: "chris@example.com",
      Status: "Cancelled",
    },
    {
      No: 6,
      Fname: "Emma",
      LName: "White",
      Time: "2023-12-30, 14:45",
      Item: "New Year's Eve Cake",
      Phone: "07234567890",
      Email_Addr: "emma@example.com",
      Status: "Cancelled",
    },
    {
      No: 7,
      Fname: "Daniel",
      LName: "Clark",
      Time: "2024-01-05, 11:20",
      Item: "Valentine's Day Roses",
      Phone: "07456789012",
      Email_Addr: "daniel@example.com",
      Status: "Pending",
    },
    {
      No: 8,
      Fname: "Sophia",
      LName: "Taylor",
      Time: "2024-01-10, 17:30",
      Item: "Thank You Bouquet",
      Phone: "07123456789",
      Email_Addr: "sophia@example.com",
      Status: "Resolved",
    },
    {
      No: 9,
      Fname: "Matthew",
      LName: "Harris",
      Time: "2024-01-15, 13:10",
      Item: "Get Well Soon Balloons",
      Phone: "07890123456",
      Email_Addr: "matthew@example.com",
      Status: "Pending",
    },
    {
      No: 10,
      Fname: "Olivia",
      LName: "Moore",
      Time: "2024-01-20, 09:40",
      Item: "Baby Shower Gift",
      Phone: "07543210987",
      Email_Addr: "olivia@example.com",
      Status: "Resolved",
    },
    {
      No: 11,
      Fname: "William",
      LName: "Miller",
      Time: "2024-01-25, 16:00",
      Item: "Congratulations Flowers",
      Phone: "07654321098",
      Email_Addr: "william@example.com",
      Status: "Cancelled",
    },
    {
      No: 12,
      Fname: "John",
      LName: "Doe",
      Time: "2023-12-05, 15:23",
      Item: "Birthday Cake",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      Status: "Pending",
    },
  ]);
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

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Fname" },
    { field: "LName" },
    { field: "Time" },
    { field: "Item" },
    { field: "Phone" },
    { field: "Email_Addr" },
  ]);

  const getRowStyle = (params) => {
    return {
      "border-radius": "5px",
    };
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-alpine w-[1100px]"}>
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
          onClick={() => {
            setStatus("Pending");
            updateTable("Pending");
          }}
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
