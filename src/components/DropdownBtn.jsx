import { useState } from "react";
import sortIcon from "../assets/sort-icon.svg";
import Button from "./Button";

const DropdownBtn = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative">
			<Button
				text={"Sort by"}
				icon={sortIcon}
				styles={"border-slate-500 hover:border-slate-800 px-8"}
				fn={() => setIsOpen((prev) => (prev = !prev))}
			/>
			{isOpen && (
				<div className="bg-slate-50 border border-slate-500 absolute w-full mt-2 rounded-md py-2 text-sm">
					<div onClick={() => setIsOpen((prev) => !prev)} className="px-4 py-1 hover:bg-slate-100 hover:cursor-pointer">
						ID.
					</div>
					<div onClick={() => setIsOpen((prev) => !prev)} className="px-4 py-1 hover:bg-slate-100 hover:cursor-pointer">
						Document No.
					</div>
					<div onClick={() => setIsOpen((prev) => !prev)} className="px-4 py-1 hover:bg-slate-100 hover:cursor-pointer">
						Type
					</div>
					<div onClick={() => setIsOpen((prev) => !prev)} className="px-4 py-1 hover:bg-slate-100 hover:cursor-pointer">
						Amount
					</div>
					<div onClick={() => setIsOpen((prev) => !prev)} className="px-4 py-1 hover:bg-slate-100 hover:cursor-pointer">
						Date
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownBtn;
