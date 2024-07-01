import React from "react";
import "./Admin.css";
import Table from "../../utilcompoents/Table/Table";
export const Admin = () => {
  const data = [
    {
      Name: "John Doe",
      Age: 30,
      purphose: "Engineer",
      email: "test@gmail.com",
    },
    {
      Name: "Jane Smith",
      Age: 25,
      purphose: "Designer",
      email: "test@gmail.com",
    },
    {
      Name: "Sam Johnson",
      Age: 35,
      purphose: "Manager",
      email: "test@gmail.com",
    },
  ];

  const columnNames = ["Name", "Age", "email", "purphose", "Action"];
  const columnWidths = ["10%", "5%", "20%", "30%", "5%"];
  const sliceOfLetters = [10, 5, 30, 50];
  return (
    <div className="admin">
      <Table
        data={data}
        columnWidths={columnWidths}
        columnNames={columnNames}
        sliceOfLetters={sliceOfLetters}
      />
    </div>
  );
};
