import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const Invoices = () => {
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
      IssueTime: "2023-12-08 10:00",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      TotalAmount: 19000,
      Status: "Resolved",
    },
    {
      No: 2,
      Fname: "Alice",
      Lname: "Smith",
      Time: "2023-12-10, 18:45",
      IssueTime: "2023-12-12 12:30",
      Phone: "07851234987",
      Email_Addr: "alice.smith@email.com",
      TotalAmount: 23000,
      Status: "Resolved",
    },
    {
      No: 3,
      Fname: "Robert",
      Lname: "Johnson",
      Time: "2023-12-15, 12:30",
      IssueTime: "2023-12-18 09:15",
      Phone: "07123456789",
      Email_Addr: "robert.johnson@company.com",
      TotalAmount: 15000,
      Status: "Pending",
    },
    {
      No: 4,
      Fname: "Emily",
      Lname: "Clark",
      Time: "2023-12-20, 09:15",
      IssueTime: "2023-12-22 20:00",
      Phone: "07987654321",
      Email_Addr: "emily.clark@gmail.com",
      TotalAmount: 18000,
      Status: "Pending",
    },
    {
      No: 5,
      Fname: "David",
      Lname: "Williams",
      Time: "2023-12-25, 20:00",
      IssueTime: "2023-12-28 09:45",
      Phone: "07654321987",
      Email_Addr: "david.williams@example.com",
      TotalAmount: 25000,
      Status: "Pending",
    },
    {
      No: 6,
      Fname: "Sophie",
      Lname: "Anderson",
      Time: "2023-12-08, 14:00",
      IssueTime: "2023-12-10 16:45",
      Phone: "07451234567",
      Email_Addr: "sophie.anderson@email.com",
      TotalAmount: 20000,
      Status: "Pending",
    },
    {
      No: 7,
      Fname: "Michael",
      Lname: "Turner",
      Time: "2023-12-12, 09:45",
      IssueTime: "2023-12-15 14:30",
      Phone: "07893456789",
      Email_Addr: "michael.turner@example.com",
      TotalAmount: 16000,
      Status: "Resolved",
    },
    {
      No: 8,
      Fname: "Olivia",
      Lname: "Baker",
      Time: "2023-12-18, 16:30",
      IssueTime: "2023-12-20 11:15",
      Phone: "07234567890",
      Email_Addr: "olivia.baker@company.net",
      TotalAmount: 22000,
      Status: "Resolved",
    },
    {
      No: 9,
      Fname: "Daniel",
      Lname: "Miller",
      Time: "2023-12-22, 11:15",
      IssueTime: "2023-12-25 13:00",
      Phone: "07987654321",
      Email_Addr: "daniel.miller@example.com",
      TotalAmount: 19000,
      Status: "Resolved",
    },
    {
      No: 10,
      Fname: "Grace",
      Lname: "Harrison",
      Time: "2023-12-28, 19:00",
      IssueTime: "2023-12-30 17:45",
      Phone: "07123456789",
      Email_Addr: "grace.harrison@email.com",
      TotalAmount: 27000,
      Status: "Pending",
    },
    {
      No: 11,
      Fname: "Nathan",
      Lname: "Coleman",
      Time: "2023-12-30, 10:30",
      IssueTime: "2024-01-02 09:30",
      Phone: "07651234567",
      Email_Addr: "nathan.coleman@example.com",
      TotalAmount: 21000,
      Status: "Pending",
    },
    {
      No: 12,
      Fname: "Isabel",
      Lname: "Garcia",
      Time: "2024-01-02, 13:45",
      IssueTime: "2024-01-05 14:15",
      Phone: "07897654321",
      Email_Addr: "isabel.garcia@email.com",
      TotalAmount: 24000,
      Status: "Resolved",
    },
  ]);
  const filterByStatus = (status) => {
    const filteredRows = rowData.filter((row) => row.Status === status);
    return filteredRows;
  };

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

  const [displayData, setDisplayData] = useState(filterByStatus(status));

  const updateTable = (status) => {
    setDisplayData(filterByStatus(status));
  };

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

export default Invoices;
