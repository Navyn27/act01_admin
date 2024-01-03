import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

const OrderReport = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      No: 1,
      FName: "John",
      LName: "Doe",
      Time: "2023-12-05, 15:23",
      Item: "Main Hall",
      Phone: "07592319512",
      Email_Addr: "john@example.com",
      Status: true,
    },
    {
      No: 2,
      FName: "Jane",
      LName: "Smith",
      Time: "2023-12-10, 18:45",
      Item: "Wedding Grounds",
      Phone: "07851234987",
      Email_Addr: "jane.smith@email.com",
      Status: false,
    },
    {
      No: 3,
      FName: "Mike",
      LName: "Johnson",
      Time: "2023-12-15, 12:30",
      Item: "Room",
      Phone: "07123456789",
      Email_Addr: "mike.johnson@company.com",
      Status: true,
    },
    {
      No: 4,
      FName: "Emily",
      LName: "Clark",
      Time: "2023-12-20, 09:15",
      Item: "Room",
      Phone: "07987654321",
      Email_Addr: "emily.clark@gmail.com",
      Status: true,
    },
    {
      No: 5,
      FName: "David",
      LName: "Williams",
      Time: "2023-12-25, 20:00",
      Item: "Party Hall",
      Phone: "07654321987",
      Email_Addr: "david.williams@example.com",
      Status: false,
    },
    {
      No: 6,
      FName: "Sophie",
      LName: "Anderson",
      Time: "2023-12-08, 14:00",
      Item: "Book Club Meeting",
      Phone: "07451234567",
      Email_Addr: "sophie.anderson@email.com",
      Status: true,
    },
    {
      No: 7,
      FName: "Robert",
      LName: "Turner",
      Time: "2023-12-12, 09:45",
      Item: "Wedding Ground",
      Phone: "07893456789",
      Email_Addr: "robert.turner@example.com",
      Status: false,
    },
    {
      No: 8,
      FName: "Olivia",
      LName: "Baker",
      Time: "2023-12-18, 16:30",
      Item: "Wedding Ground",
      Phone: "07234567890",
      Email_Addr: "olivia.baker@company.net",
      Status: true,
    },
    {
      No: 9,
      FName: "Daniel",
      LName: "Miller",
      Time: "2023-12-22, 11:15",
      Item: "Family Reunion",
      Phone: "07987654321",
      Email_Addr: "daniel.miller@example.com",
      Status: false,
    },
    {
      No: 10,
      FName: "Grace",
      LName: "Harrison",
      Time: "2023-12-28, 19:00",
      Item: "Dinner Reservation",
      Phone: "07123456789",
      Email_Addr: "grace.harrison@email.com",
      Status: true,
    },
    {
      No: 11,
      FName: "Nathan",
      LName: "Coleman",
      Time: "2023-12-30, 10:30",
      Item: "Hall - BD Party",
      Phone: "07651234567",
      Email_Addr: "nathan.coleman@example.com",
      Status: false,
    },
    {
      No: 12,
      FName: "Isabel",
      LName: "Garcia",
      Time: "2024-01-02, 13:45",
      Item: "Wedding Ground",
      Phone: "07897654321",
      Email_Addr: "isabel.garcia@email.com",
      Status: true,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "No" },
    { field: "FName" },
    { field: "LName" },
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

export default OrderReport;
