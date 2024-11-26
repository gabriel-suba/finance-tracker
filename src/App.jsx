import BetterSidebar, { SidebarItem } from "./components/BetterSidebar";
import DataTable from "./components/DataTable";
import ResponsiveTable from "./components/ResponsiveTable";
import Sidebar from "./components/Sidebar";
import homeIcon from "./assets/home-icon.svg";
import txIcon from "./assets/transaction-icon.svg";

const App = () => {
	return (
		<div className="App flex">
			{/* <Sidebar /> */}
			<BetterSidebar>
				<SidebarItem icon={homeIcon} text="Dashboard" active={false} alert={true} />
				<SidebarItem icon={txIcon} text="Transactions" active={true} />
			</BetterSidebar>

			<div className="w-full h-screen">
				{/* <DataTable /> */}
				<ResponsiveTable />
			</div>
		</div>
	);
};

export default App;
