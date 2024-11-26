import tempLogo from "../assets/main-temp-icon.svg";
import txIcon from "../assets/transaction-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import openIcon from "../assets/open-icon.svg";
import logoIcon from "../assets/logo-icon.svg";
import { useState } from "react";

const Sidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	return (
		<div className="min-w-max min-h-screen border border-slate-200">
			<div className="p-4 flex items-center justify-between gap-4 mb-4">
				<div className={`flex ${isCollapsed && "hidden"} items-center gap-2 none`}>
					<img src={logoIcon} alt="money" className="w-8 h-8" />
					<h1 className="sm:text-lg md:text-xl text-xl">FundFlow</h1>
				</div>
				<button onClick={() => setIsCollapsed(prev => !prev)}>
					<img src={isCollapsed ? openIcon : closeIcon} alt="collapse" className="h-full w-auto" />
				</button>
			</div>
			<div className="px-2">
				<ul>
					<li className="px-2 py-4 flex items-center gap-2 hover:bg-slate-100 hover:rounded-xl hover:cursor-pointer">
						<img src={homeIcon} alt="Home" />
						<p className={`ml-4 ${isCollapsed && "hidden"}`}>Dashboard</p>
					</li>
					<li className="px-2 py-4 flex items-center gap-2 hover:bg-slate-100 hover:rounded-xl hover:cursor-pointer">
						<img src={txIcon} alt="Transaction" />
						<p className={`ml-4 ${isCollapsed && "hidden"}`}>Transaction</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
