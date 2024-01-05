import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const Invoices = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchOption, setSearchOption] = useState("");

  const [rowData, setRowData] = useState([
    {
      No: 1,
      Fname: "John",
      Lname: "Doe",
      Position: "Manager",
      Time: "2023-12-10, 18:45",
      Action: "Resolved Order",
      CorrespondingId: 8,
    },
    {
      No: 2,
      Fname: "Alice",
      Lname: "Smith",
      Position: "Director",
      Time: "2023-11-05, 12:30",
      Action: "Update Status",
      CorrespondingId: 12,
    },
    {
      No: 3,
      Fname: "Bob",
      Lname: "Johnson",
      Position: "Waiter",
      Time: "2023-09-20, 14:15",
      Action: "Review Report",
      CorrespondingId: 5,
    },
    {
      No: 4,
      Fname: "Emily",
      Lname: "Brown",
      Position: "Analyst",
      Time: "2024-01-02, 10:00",
      Action: "Submit Proposal",
      CorrespondingId: 9,
    },
    {
      No: 5,
      Fname: "Michael",
      Lname: "Taylor",
      Position: "Coordinator",
      Time: "2023-10-15, 16:45",
      Action: "Approve Request",
      CorrespondingId: 7,
    },
    {
      No: 6,
      Fname: "Sophia",
      Lname: "Clark",
      Position: "Specialist",
      Time: "2023-12-05, 09:30",
      Action: "Assign Task",
      CorrespondingId: 11,
    },
    {
      No: 7,
      Fname: "Daniel",
      Lname: "Miller",
      Position: "Director",
      Time: "2023-11-28, 20:00",
      Action: "Conduct Meeting",
      CorrespondingId: 6,
    },
  ]);

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

  const [displayData, setDisplayData] = useState(rowData);

  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "Fname" },
    { field: "Lname" },
    { field: "Position" },
    { field: "Time" },
    { field: "Action" },
    { field: "CorrespondingId" },
  ]);

  const getRowStyle = (params) => {
    return {
      "border-radius": "5px",
    };
  };

  return (
    <div className="ag-theme-alpine h-[550px] w-[1100px]">
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
