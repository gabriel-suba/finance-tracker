import addIcon from "../assets/add-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
import exportIcon from "../assets/export-icon.svg";
import leftIcon from "../assets/left-icon.svg";
import rightIcon from "../assets/right-icon.svg";
import Button from "../components/Button";
import DropdownBtn from "../components/DropdownBtn";
import vertIcon from "../assets/vert-icon.svg";
import columnDefinition from "../table/columnDefinition";
import mockdata from "../data/mockdata";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const ResponsiveTable = () => {
  const [data, setData] = useState(mockdata);
	const table = useReactTable({
    data: data,
    columns: columnDefinition,
    getCoreRowModel: getCoreRowModel(),
  });

	return (
		<>
			<div className="h-16 px-4 flex items-center gap-2 mb-2 border-b border-slate-200">
        <h1 className="text-lg md:text-xl font-bold">Transactions</h1>
      </div>
      <div className="px-4">
        <TransactionCards />
      </div>
		</>
	);
}

const TransactionCards = () => {
  return (
    <div className="py-2 px-2 border border-slate-500 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <h2 className="font-bold">TRX#000001</h2>
          <Tags type="expense" />
        </div>
        {/* <p className="bg-red-300 text-xs">expense</p> */}
        <p className="text-sm text-slate-600">2024/10/10</p>
        <button className="w-8 h-8 flex justify-center items-center">
          <img src={vertIcon} alt="" className="" />
        </button>
      </div>
      <p className="mt-2 my-4">
        Paid some bills...
      </p>
      <div className="flex justify-between">
        <p className="font-bold">BDO</p>
        <p>PHP -12,000.00</p>
      </div>
    </div>
  )
}

const Tags = ({ type }) => {
	let style = "flex justify-center items-center text-xs rounded-full px-2 ";

	switch (type) {
		case "expense":
			style += "bg-red-300 text-red-950";
			break;
		case "transfer":
			style += "bg-sky-300 text-sky-950";
			break;
		case "income":
			style += "bg-green-300 text-green-950";
			break;
		default:
			break;
	}

	return (
		<div className={`flex justify-center items-center text-xs rounded-full px-2 ${style}`}>
			<p>{type}</p>
		</div>
	);
};

export default ResponsiveTable;