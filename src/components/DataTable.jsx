import exportIcon from "../assets/export-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
import addIcon from "../assets/add-icon.svg";
import leftIcon from "../assets/left-icon.svg";
import rightIcon from "../assets/right-icon.svg";
import DropdownBtn from "../components/DropdownBtn";
import Button from "../components/Button";
import mockdata from "../data/mockdata";

import columnDefinition from "../table/columnDefinition";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const DataTable = () => {
  const [data, setData] = useState(mockdata);

  const [columnVisibility, setColumnVisibility] = useState({
    // delete: false,
    // id: false,
    // documentNumber: false,
    // type: false,
    // account: true,
    // amount: true,
    // from: true,
    // date: false
  })

  const table = useReactTable({
    data: data,
    columns: columnDefinition,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility,
  });

  const visibleColumnsCount = table.getVisibleLeafColumns().length;

  return (
    <>
      <div className="p-4 flex items-center gap-2 mb-4 border-b border-slate-200">
        <h1 className="font-bold text-2xl">Transactions</h1>
      </div>

      {/* <div className="px-4 py-1.5 flex justify-between ">
        <div className="flex gap-4">
          <Button
            text={"Export"}
            icon={exportIcon}
            styles={"border-slate-500 hover:border-slate-800"}
          />
          <Button
            text={"Delete"}
            icon={deleteIcon}
            styles={"border-red-300 hover:border-red-500"}
          />
        </div>

        <div className="flex gap-4">
          <DropdownBtn />
          <Button
            text={"New Transaction"}
            icon={addIcon}
            styles={"bg-slate-700 text-slate-50 hover:bg-slate-600"}
          />
        </div>
      </div> */}

      <div className="p-4 text-sm">
        {/* HEADERS */}
        {table.getHeaderGroups().map((headerGroup) => (
          <div
            key={headerGroup.id}
            className={`grid grid-cols-8 bg-slate-50 border border-slate-300 text-center rounded-t-2xl font-bold`}
          >
            {headerGroup.headers.map((header) => (
              <div className="relative py-2" key={header.id}>
                {header.column.columnDef.header}
              </div>
            ))}
          </div>
        ))}

        {/* ROW DATA */}
        {table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className={`grid grid-cols-8 ${row.id == mockdata.length - 1 ? "" : "border-b"} border-l border-r border-slate-300 text-center py-2 hover:bg-slate-50`}
          >
            {row.getVisibleCells().map((cell) => (
              <div key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
            ))}
          </div>
        ))}

        <div className="flex justify-end items-center bg-slate-50 pr-4 border border-slate-300 text-center py-2 rounded-b-2xl">
          <p className="mr-4">
            {mockdata[0].documentNumber} - {mockdata[mockdata.length - 1].documentNumber}
          </p>
          <button className="mr-4">
            <img src={leftIcon} alt="" />
          </button>
          <button className="mr-4">
            <img src={rightIcon} alt="" />
          </button>
          <p>Total: 1240028</p>
        </div>
      </div>
    </>
  );
};

export default DataTable;
