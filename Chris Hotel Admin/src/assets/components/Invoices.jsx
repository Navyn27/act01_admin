import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const Invoices = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      No: 1,
      FName: "John",
      LName: "Doe",
      Time: "2023-12-05, 15:23",
      IssueTime: "2023-12-08 10:00",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      TotalAmount: 19000,
    },
    {
      No: 2,
      FName: "Alice",
      LName: "Smith",
      Time: "2023-12-10, 18:45",
      IssueTime: "2023-12-12 12:30",
      Phone: "07851234987",
      Email_Addr: "alice.smith@email.com",
      TotalAmount: 23000,
    },
    {
      No: 3,
      FName: "Robert",
      LName: "Johnson",
      Time: "2023-12-15, 12:30",
      IssueTime: "2023-12-18 09:15",
      Phone: "07123456789",
      Email_Addr: "robert.johnson@company.com",
      TotalAmount: 15000,
    },
    {
      No: 4,
      FName: "Emily",
      LName: "Clark",
      Time: "2023-12-20, 09:15",
      IssueTime: "2023-12-22 20:00",
      Phone: "07987654321",
      Email_Addr: "emily.clark@gmail.com",
      TotalAmount: 18000,
    },
    {
      No: 5,
      FName: "David",
      LName: "Williams",
      Time: "2023-12-25, 20:00",
      IssueTime: "2023-12-28 09:45",
      Phone: "07654321987",
      Email_Addr: "david.williams@example.com",
      TotalAmount: 25000,
    },
    {
      No: 6,
      FName: "Sophie",
      LName: "Anderson",
      Time: "2023-12-08, 14:00",
      IssueTime: "2023-12-10 16:45",
      Phone: "07451234567",
      Email_Addr: "sophie.anderson@email.com",
      TotalAmount: 20000,
    },
    {
      No: 7,
      FName: "Michael",
      LName: "Turner",
      Time: "2023-12-12, 09:45",
      IssueTime: "2023-12-15 14:30",
      Phone: "07893456789",
      Email_Addr: "michael.turner@example.com",
      TotalAmount: 16000,
    },
    {
      No: 8,
      FName: "Olivia",
      LName: "Baker",
      Time: "2023-12-18, 16:30",
      IssueTime: "2023-12-20 11:15",
      Phone: "07234567890",
      Email_Addr: "olivia.baker@company.net",
      TotalAmount: 22000,
    },
    {
      No: 9,
      FName: "Daniel",
      LName: "Miller",
      Time: "2023-12-22, 11:15",
      IssueTime: "2023-12-25 13:00",
      Phone: "07987654321",
      Email_Addr: "daniel.miller@example.com",
      TotalAmount: 19000,
    },
    {
      No: 10,
      FName: "Grace",
      LName: "Harrison",
      Time: "2023-12-28, 19:00",
      IssueTime: "2023-12-30 17:45",
      Phone: "07123456789",
      Email_Addr: "grace.harrison@email.com",
      TotalAmount: 27000,
    },
    {
      No: 11,
      FName: "Nathan",
      LName: "Coleman",
      Time: "2023-12-30, 10:30",
      IssueTime: "2024-01-02 09:30",
      Phone: "07651234567",
      Email_Addr: "nathan.coleman@example.com",
      TotalAmount: 21000,
    },
    {
      No: 12,
      FName: "Isabel",
      LName: "Garcia",
      Time: "2024-01-02, 13:45",
      IssueTime: "2024-01-05 14:15",
      Phone: "07897654321",
      Email_Addr: "isabel.garcia@email.com",
      TotalAmount: 24000,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "FName" },
    { field: "LName" },
    { field: "Time" },
    { field: "Issue time" },
    { field: "Phone" },
    { field: "Email_Addr" },
    { field: "TotalAmount" },
  ]);

  const getRowStyle = (params) => {
    return {
      "border-radius": "5px",
    };
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-alpine h-[550px] w-[1100px]"}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        getRowStyle={getRowStyle}
      />
    </div>
  );
};

export default Invoices;
