import React from "react";
import "./Table.css";
import { BiSearch } from "react-icons/bi";
const Table = ({ data, columnWidths, columnNames, sliceOfLetters }) => {
  return (
    <div className="table-card">
      <div className="table-search-input-card">
        <div className="table-input-card">
          <BiSearch size={20} color="lightgray" />
          <input
            className="table-search-input"
            type="text"
            placeholder="Search here .......!"
          />
        </div>
      </div>
      <div className="table-header-body-card">
        <div className="table-header-card">
          {columnNames?.map((column, key) => (
            <span
              // className="bod"
              key={key}
              style={{ width: columnWidths[key] || "auto" }}
            >
              {column}
            </span>
          ))}
        </div>
        <div className="table-main-body-card">
          {data?.map((each, key) => (
            <div key={key} className="table-single-body">
              {columnNames.map((column, colIndex) => (
                <span
                  key={colIndex}
                  style={{
                    width: columnWidths[colIndex] || "auto",
                  }}
                >
                  {typeof each[column] === "string"
                    ? each[column].slice(0, sliceOfLetters[colIndex])
                    : each[column]}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
