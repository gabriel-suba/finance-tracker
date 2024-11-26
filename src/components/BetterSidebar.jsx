import logo from "../assets/logo-icon.svg";
import openIcon from "../assets/open-icon.svg";
import closeIcon from "../assets/close-icon.svg";
import vertIcon from "../assets/vert-icon.svg";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

const BetterSidebar = ({ children }) => {
	const [expanded, setExpanded] = useState(true);

	return (
		<aside className="min-w-min">
			<nav className="h-svh flex flex-col bg-white border-r shadow-sm">
				<div className="h-16 px-4 flex justify-between items-center border-b">
					<div className="flex items-center gap-2">
						<img 
							src={logo} 
							alt="logo" 
							className={`overflow-hidden transition-all ${expanded ? "w-10" : "w-0"}`} 
						/>
						<p className={`text-xl ${expanded ? "block" : "hidden"}`}>FundFlow</p>
					</div>
					<button onClick={() => setExpanded(prev => !prev)} className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100">
						{
							expanded ? <img src={closeIcon} alt="" className="w-8 h-8" /> : <img src={openIcon} alt="" className="w-8 h-8" />
						}
					</button>
				</div>
				
				<SidebarContext.Provider value={{ expanded }}>
					<ul className="flex-1 px-3">{ children }</ul>
				</SidebarContext.Provider>

				<div className="border-t flex p-3">
					<img 
						src="https://ui-avatars.com/api/?background=0D8ABC&color=fff" 
						alt="avatar" 
						className="w-10 h-10 rounded-md"
					/>
					<div className={`
							flex justify-between items-center
							overflow-hidden transition-all
							${expanded ? "w-52 ml-3" : "w-0"}
					`}>
						<div className="leading-4">
							<h4 className="font-semibold">John Doe</h4>
							<span className="text-xs text-gray-600">johndoe@gmail.com</span>
						</div>
						<button className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100">
							<img src={vertIcon} alt="" className="w-8 h-8" />
						</button>
					</div>
				</div>
			</nav>
		</aside>
	);
}

export const SidebarItem = ({ icon, text, active, alert }) => {
	const { expanded } = useContext(SidebarContext);

	return (
		<li className={`
				relative flex items-center py-2 px-1.5 my-1.5
				font-medium rounded-md cursor-pointer
				transition-colors
				${
					active 
					? "bg-slate-200"
					: "hover:bg-slate-200 text-slate-700"
				}
		`}>
			<img src={icon} className="min-w-6" />
			<span className={`overflow-hidden transition-all ${expanded ? "w-full ml-3" : "w-0"}`}>{text}</span>
			{alert && (
				<div className={`absolute right-2 w-2 h-2 rounded bg-slate-400 ${expanded ? "" : "top-2 right-1"}`}></div>
			)}
		</li>
	)
}
 
export default BetterSidebar;